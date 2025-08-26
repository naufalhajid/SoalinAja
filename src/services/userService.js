import { firestore } from "./firebase_config";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";

export const saveUserProfile = async (uid, profile) => {
  await setDoc(doc(firestore, "users", uid), profile);
};

export const getUserProfile = async (uid) => {
  const docSnap = await getDoc(doc(firestore, "users", uid));
  return docSnap.exists() ? docSnap.data() : null;
};

export const updateUserProgress = async (uid, progress) => {
  await updateDoc(doc(firestore, "users", uid), { progress });
};
