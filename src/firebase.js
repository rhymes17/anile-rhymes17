
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAs35bVg82NKnuGA0wz5ic5oTJSPNziExc",
  authDomain: "anile-rhymes.firebaseapp.com",
  projectId: "anile-rhymes",
  storageBucket: "anile-rhymes.appspot.com",
  messagingSenderId: "263376630399",
  appId: "1:263376630399:web:f53ba5897587b4c5ac454a"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {app, db}

