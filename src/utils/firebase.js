// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore/dist/firestore";
import {GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWM6QPkzeEw97uUgdRIesNNfFcett1Ki0",
  authDomain: "todo-app-f0c13.firebaseapp.com",
  projectId: "todo-app-f0c13",
  storageBucket: "todo-app-f0c13.appspot.com",
  messagingSenderId: "797983670739",
  appId: "1:797983670739:web:7390ec39792ec52b0daf26",
  measurementId: "G-7YL4WCVE86",
};

// Initialize Firebase
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider()
// const analytics = getAnalytics(app);

export {db, auth, storage, provider}
