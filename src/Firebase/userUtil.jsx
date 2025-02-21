import { firestore } from './firebase.jsx';
import { doc, updateDoc, getDocs, collection, deleteDoc, setDoc } from 'firebase/firestore';

// Function to get user photo URL from Firestore
export const getUserPhotoURL = async (uid) => {
    let userDoc = ''
    const querySnapshot = await getDocs(collection(firestore, "users"));
    querySnapshot.forEach((doc) => {
        if (doc.id === uid) {
            userDoc = doc.data().profilePhotoURL
        }
    });
    return userDoc
};

// Function to update user photo URL in Firestore
export const updateUserPhotoURL = async (uid, url) => {
    await updateDoc(doc(firestore, 'users', uid), {
        profilePhotoURL: url,
    });
};

// get all users data
export const getEntries = async () => {
    const userData = [];
    const querySnapshot = await getDocs(collection(firestore, "entries"));

    querySnapshot.forEach((doc) => {
        userData.push(doc.data());
    });

    return userData;
}

// Function to get user photo URL from Firestore
export const getSingleEntry = async (uid) => {
    let userDoc = ''
    const querySnapshot = await getDocs(collection(firestore, "entries"));
    querySnapshot.forEach((doc) => {
        if (doc.id === uid) {
            userDoc = doc.data()
        }
    });
    return userDoc
};


export const deleteEntry = async (id) => {
    await deleteDoc(doc(firestore, 'entries', id));
}

export const addOrder = async (orderData) => {
    try {
        const orderRef = doc(collection(firestore, 'orders'));
        await setDoc(orderRef, orderData);
    } catch (error) {
        console.error("Error adding order: ", error);
    }
};
