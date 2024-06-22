// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "universal-estate.firebaseapp.com",
  projectId: "universal-estate",
  storageBucket: "universal-estate.appspot.com",
  messagingSenderId: "969363175475",
  appId: "1:969363175475:web:73ee6a5ccf03b3a7ea8b46"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);