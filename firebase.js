import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import * as firebase from "firebase";
// import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAUc9v6Qj3qA5e3a8Px4palaJYtTTsVT1U",
  authDomain: "date-app-c3e25.firebaseapp.com",
  projectId: "date-app-c3e25",
  storageBucket: "date-app-c3e25.appspot.com",
  messagingSenderId: "881977180181",
  appId: "1:881977180181:web:87b5bacb28681683464e1c",
  measurementId: "G-6TRXYQGR56",
};

const firebaseApp = initializeApp(firebaseConfig);

const database = getFirestore(firebaseApp);

export default database;
