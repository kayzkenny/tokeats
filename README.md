# ToksEats VueJS App

## To fork this app run

```shell
npm install
```

Include and update the db.js file below with your firebase config, which you can get from your firebase project settings

```js
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the firebase services that you want to use
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

// Initialize firebase
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// export firebase services
export { db, fb };
```
