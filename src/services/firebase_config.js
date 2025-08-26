// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzJCONP5jNKG11RZ1epfkdYjYjCXZEB3Q",
  authDomain: "soalinaja-9299d.firebaseapp.com",
  projectId: "soalinaja-9299d",
  storageBucket: "soalinaja-9299d.firebasestorage.app",
  messagingSenderId: "235638035532",
  appId: "1:235638035532:web:6631a25f6efd29ef7810e9",
  measurementId: "G-QGFYC0NWDD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const firestore = getFirestore(app);