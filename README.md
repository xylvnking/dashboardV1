remember that i think the audio file html tag automatically downloads the file by default so thats what crashed the db before

## packages
[react firebase hooks](https://www.npmjs.com/package/react-firebase-hooks)
```shell
npx create-next-app@latest
npm install firebase
npm i react-firebase-hooks

```

# learned

## next
[dynamic catch all routes](https://nextjs.org/docs/routing/dynamic-routes)

## firebase

[get all collections (node only)](https://googleapis.dev/nodejs/firestore/latest/Firestore.html#listCollections)

### quick start guide

install firebase 
```shell
```
set cloud storage location to 'northamerica-northeast1' which is montreal

set up environment variables for the config
```js
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
```

## react

### arrays as jsx children

I feel goofy only learning this now - but you can list array directly as jsx. I thought they were considered 'objects' and that react wouldn't allow it.