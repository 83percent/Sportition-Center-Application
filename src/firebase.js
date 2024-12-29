// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRP7UnBxPpAYbUtm14bF3UtIFQ2d1_rZM",
  authDomain: "sporti-b4f92.firebaseapp.com",
  projectId: "sporti-b4f92",
  storageBucket: "sporti-b4f92.firebasestorage.app",
  messagingSenderId: "68814527816",
  appId: "1:68814527816:web:77c06d5be6159c5ad5277d",
  measurementId: "G-LGMM8YPF38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
