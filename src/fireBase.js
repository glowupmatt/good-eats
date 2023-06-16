// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "good-eats-a5259.firebaseapp.com",
  projectId: "good-eats-a5259",
  storageBucket: "good-eats-a5259.appspot.com",
  messagingSenderId: "600649607756",
  appId: "1:600649607756:web:3620e6f3a880134a37e2e9",
  measurementId: "G-MPWBBXB5W9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };
