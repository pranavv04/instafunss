
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
 
const firebaseConfig = {
  apiKey: "AIzaSyAWvlpP_fhtb3c_PvJl63ERBkDEiks74PU",
  authDomain: "joegoldberg-ec363.firebaseapp.com",
  projectId: "joegoldberg-ec363",
  storageBucket: "joegoldberg-ec363.appspot.com",
  messagingSenderId: "1000643767322",
  appId: "1:1000643767322:web:a5b850b1f165aa0730f5a3",
  measurementId: "G-M4BW951D8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app);
export const storage = getStorage(app);