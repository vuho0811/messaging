import firebase from 'firebase'
import 'firebase/storage';  // <----

const firebaseConfig = {
    apiKey: "AIzaSyDNRtt0pSi0CTpiS_1wCFyCpJh9M1berTY",
    authDomain: "chatapp-54725.firebaseapp.com",
    projectId: "chatapp-54725",
    storageBucket: "chatapp-54725.appspot.com",
    messagingSenderId: "516617495083",
    appId: "1:516617495083:web:17c8835df6eb7f124ac06e",
    measurementId: "G-NZPZPPH552"
  };


//   const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage()

  
  export {db, auth, provider,storage};