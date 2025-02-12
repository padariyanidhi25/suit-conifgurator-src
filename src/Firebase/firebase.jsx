// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBI90DcZxm4Stvs_xLkgm8m0dtzr6n7m1o",
  authDomain: "vaibhav-shashank.firebaseapp.com",
  projectId: "vaibhav-shashank",
  storageBucket: "vaibhav-shashank.firebasestorage.app",
  messagingSenderId: "903752393618",
  appId: "1:903752393618:web:9d66ed21d3ca788280574b",
  measurementId: "G-QZNRLKJWDH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, firestore, storage };
