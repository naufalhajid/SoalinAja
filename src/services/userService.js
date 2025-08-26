import { db } from "./firebaseConfig";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";

export const saveUserProfile = async (uid, profile) => {
  await setDoc(doc(db, "users", uid), profile);
};

export const getUserProfile = async (uid) => {
  const docSnap = await getDoc(doc(db, "users", uid));
  return docSnap.exists() ? docSnap.data() : null;
};

export const updateUserProgress = async (uid, progress) => {
  await updateDoc(doc(db, "users", uid), { progress });
};
