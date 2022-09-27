// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNWiURhezeZrMAwLqGrYfKq0xehfGQZ5E",
  authDomain: "next-auth-crud-f0688.firebaseapp.com",
  projectId: "next-auth-crud-f0688",
  storageBucket: "next-auth-crud-f0688.appspot.com",
  messagingSenderId: "79167245108",
  appId: "1:79167245108:web:bdd8df24b07c37d5be3361"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);