remember that i think the audio file html tag automatically downloads the file by default so thats what crashed the db before

## packages
[react firebase hooks](https://www.npmjs.com/package/react-firebase-hooks)
[react-textarea-autozie](https://www.npmjs.com/package/react-textarea-autosize)


# learned

## sass/next

you ahve to restart the dev server when adding a new scss module

## data structuring

yeah the structure I'm using this time makes so much more sense.

specifically with the songs data - have songs be an array and not an object allows me to easily iterate over it, and if i need a specific song i can finx the index from the metadata.

the way i ahd it in the pre alpha was cumbersome - i had to keep iterating over values and keys of objects in order to access anything, and i had no easy way of sorting the ui elements for stff like most recently edited and whatnot. it was all possible but it was a poor design and made moving forward with it a nightmare and i'm glad i learned from it and made this new version better.

## so

[Using async/await with a forEach loop](https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop)
[storing firebase user UIDs publicly](https://www.quora.com/Is-it-unsafe-to-reveal-the-user-IDs-of-Firebase-users)

## next
[dynamic catch all routes](https://nextjs.org/docs/routing/dynamic-routes)

## prerendering data dependant on props

i'm pretty sure next can't prerender data which is passed as a prop to a child component. 

My solution has been to make sure it only renders if the data exists, but since I can't even check for the props data existence, I have to check if a piece of state exists, and then set that state with the props data with a useEffect on load.

I suspect that there is a better way, but right now this makes sense and works fine. 

## images

next images are weird and i don't use them enough to justify going in depth with them right now. they have to be wrapped in a div or something else to work like you'd expect, and i don't know why some css doesn't work on them at all, and some works only if you put it directly on with style={{}}. [zindex issue](https://github.com/vercel/next.js/discussions/30259)

### react router query

[when using react router query params and a useEffect on load, remember that the query isn't available until hydration and that the parameter should also be a dependecy of the useEffect](https://github.com/vercel/next.js/discussions/11484)

```js
  const router = useRouter()
  const { artist, song, ok } = router.query
  useEffect(() => {
      const getDataPublic = async () => {
        const documentsToGet = query(collection(db, "artists"), where(`metadata.artistName`, "==", 'artistname1'));
        const querySnapshot = await getDocs(documentsToGet);
        querySnapshot.forEach((doc) => {
          // do whatever
        });
      }
      getDataPublic()
    }
  }, [artist])
```

## firebase

[query a collection to find all documents who have subcollections which contain data matching a condition](https://firebase.blog/posts/2019/06/understanding-collection-group-queries)

[get all collections (node only)](https://googleapis.dev/nodejs/firestore/latest/Firestore.html#listCollections)

### updating nested data fields with updateDoc()

[You need to use dot notation to be able to update a single field](https://stackoverflow.com/a/49151326/19101255)

```js
const docRef = doc(db, 'artists', artistData.metadata.artistName);
    updateDoc(docRef, {
      "metadata.whateverelse": 'this should be a new thing!'
    })
```

### accessing nested subcollections

the syntax is as follows to create a reference to a document within a subcollection: 
```js
const docRef = doc(db, "collectionname", "documentname", 'subcollectionname', 'documentinsubcollectionname');
const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
```
It's way easier than I thought it would be. All firebase queries are shallow, so you can hold other data within subcollections which doesn't need to be read every time the higher level document is.
[this stack overflow answer is how i learnt this](https://stackoverflow.com/a/69313831/19101255)

## react

###

In retrospect this should have been obvious, but alas.
[How can I set state on individual elements in a mapped function using React?](https://stackoverflow.com/a/71065488/19101255) (create a component for them)

### arrays as jsx children

I feel goofy only learning this now - but you can list array directly as jsx. I thought they were considered 'objects' and that react wouldn't allow it.

## audio/howler

### loading/caching

[i believe this feature with howler can help me not make ridiculous amount of data requests to firestore](https://github.com/goldfire/howler.js/#preload-booleanstring-true)

it just gets the metadata about the file, not the actual data. the problem i had before was that by using the file location url into an <audio> tag it was actually downloading the file every time which caused me to go over my bandwidth very quickly without even knowing.


# random notes from [...artist]

```js

// this page needs to be able to read from firebase using the router query, if it exists
// collection would be artist[0]
  // document names are predetermined
    // songName would be either artist[1] or song (from the ?song=somesongname parameter)

// then allow writes if they are authorized

// http://localhost:3000/artistname?song=songname



// the artists will be created by me when I actually upload files to them, so I can enter anything I want

// .collection("artists").where("metadata.artistName", "==", "artistNameFromQuery")

// you get access to their uid when they log in, so you could search for the document which contains that

// it's a little scuffed of a workflow but at this scale since it's specific to me it works fine

// .collection("artists").where("uid", "==", "the uid of the signed in artist")





// need to get reference to their artist name when they sign in
```

# html
<select> tags need to be proceeded by a label. 
for some reason they work anywhere in a form, as long as there is a label before them for some elements, and that that element is type date or radio (didn't test others) but it didn't work with type text. super weird and i have no idea why it's happening. i assume accessibility reasons or focus but felt like a strange bug that I wasn't seeing other people struggle with online, so maybe I've done something to create it. Regardless adding a label fixes it.

# for next time / out of scope

## firebase data structure

I completely neglected the fact that it might be helpful to structure the songs within either single or album structure. I'm still thinking about the most ideal way to implement this. probably 90% of my work is just singles, and it feels a bit silly to force them all into albums, but it might be needed if i wanted to add a lot more functionality to this project. it would also mean iterating over another layer, complicating the ui structure more just for an edge case.

for example if i need to just get all the songs from one album together right now, i'd have to complile that client side by using .find and .findIndex or filter or whatever and get them all that way, which is manageable but then to also get a slug of that i'd need to pass that into a route etc etc it just gets complicated. I'm definitely going to implement it and see if it's worth it, but it might just be a lesson learned. 

My other idea is to just add another object into the structure within the artsits doc for albums. so you'd have metadata containing info about the artist, songs/singles containing all the singles, and then albums containing all the albums. this would save me from having to basically rewrite the entire app *and* it would allow me to not add extra complexity and url parameters for each single.

### using nested collections with firebase

I also think that I'm going against the way that firebase should be working - by having these complicated document strcutures with no sub-collections it makes me have to go through all sorts of data to create a ui. I'm pretty sure that creating sub collections and documents would make things easier because they could be queried directly. at the very least it would be more flexible and although at this scale not a big concern but definitely more performant.

the way i'm doing things right now is basically the same except everything is held on one document. the structure is technically the same but it doesn't allow me to make queries or update just one thing as easily.

it works the way i have it but i have a feeling it would be a better idea to do it the 'proper' way and leverage firebase the way it should be leveraged.  

i'm going to continue building the app this way so its complete and see if there's anything else, but yeah this will probably unfortunately not be the version clients see. 







