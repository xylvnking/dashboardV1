remember that i think the audio file html tag automatically downloads the file by default so thats what crashed the db before

## packages
[react firebase hooks](https://www.npmjs.com/package/react-firebase-hooks)
[react-textarea-autozie](https://www.npmjs.com/package/react-textarea-autosize)


# learned

## data structuring

yeah the structure I'm using this time makes so much more sense.

specifically with the songs data - have songs be an array and not an object allows me to easily iterate over it, and if i need a specific song i can finx the index from the metadata.

the way i ahd it in the pre alpha was cumbersome - i had to keep iterating over values and keys of objects in order to access anything, and i had no easy way of sorting the ui elements for stff like most recently edited and whatnot. it was all possible but it was a poor design and made moving forward with it a nightmare and i'm glad i learned from it and made this new version better.

## so

[Using async/await with a forEach loop](https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop)
[storing firebase user UIDs publicly](https://www.quora.com/Is-it-unsafe-to-reveal-the-user-IDs-of-Firebase-users)

## next
[dynamic catch all routes](https://nextjs.org/docs/routing/dynamic-routes)

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

[get all collections (node only)](https://googleapis.dev/nodejs/firestore/latest/Firestore.html#listCollections)


## react

### arrays as jsx children

I feel goofy only learning this now - but you can list array directly as jsx. I thought they were considered 'objects' and that react wouldn't allow it.