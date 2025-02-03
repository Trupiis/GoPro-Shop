// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClsihOAk_u39qGFyVFPR8DYsnbDBupioc",
  authDomain: "gopro-f94ff.firebaseapp.com",
  projectId: "gopro-f94ff",
  storageBucket: "gopro-f94ff.firebasestorage.app",
  messagingSenderId: "718388120106",
  appId: "1:718388120106:web:2b0231a57e426241de1153"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);