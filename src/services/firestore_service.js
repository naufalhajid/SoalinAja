import { db } from './firebase_config';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export const saveUserProfile = async (userProfile) => {
    try {
        const docRef = await addDoc(collection(db, 'userProfiles'), userProfile);
        return docRef.id;
    } catch (error) {
        console.error('Error adding document: ', error);
        throw new Error('Could not save user profile');
    }
};

export const getUserProfiles = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'userProfiles'));
        const profiles = [];
        querySnapshot.forEach((doc) => {
            profiles.push({ id: doc.id, ...doc.data() });
        });
        return profiles;
    } catch (error) {
        console.error('Error getting documents: ', error);
        throw new Error('Could not retrieve user profiles');
    }
};