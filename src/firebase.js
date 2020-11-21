import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBiCbQMBBtHkSs2iyEjW5wvsWBehMUq1ZA",
  authDomain: "instagram-clone-react-6e7e0.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-6e7e0.firebaseio.com",
  projectId: "instagram-clone-react-6e7e0",
  storageBucket: "instagram-clone-react-6e7e0.appspot.com",
  messagingSenderId: "12646689305",
  appId: "1:12646689305:web:7a4f4db33cdd5246391888",
  measurementId: "G-TYLPC4ZVCB"
});

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const storage = firebaseApp.storage();

  export {db, auth, storage};