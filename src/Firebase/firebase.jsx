// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA91w3NOLhpkrIMSe1OI32NIp9wD4AYIQk",
    authDomain: "suit-config-cms.firebaseapp.com",
    projectId: "suit-config-cms",
    storageBucket: "suit-config-cms.appspot.com",
    messagingSenderId: "344219017052",
    appId: "1:344219017052:web:9eb545afbbc09124516b99",
    measurementId: "G-3SX30H58TB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, firestore, storage };
