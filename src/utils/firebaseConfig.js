// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq9PI-IWFPvpyOZpkwmd6D1WsEFFx7Ry8",
  authDomain: "project-dionysus-326fc.firebaseapp.com",
  projectId: "project-dionysus-326fc",
  storageBucket: "project-dionysus-326fc.appspot.com",
  messagingSenderId: "498046520892",
  appId: "1:498046520892:web:abfd0fcf58f2f182283d39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Firestore initialize
const db = getFirestore(app)

export default db;