// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-pritam.firebaseapp.com",
  projectId: "mern-estate-pritam",
  storageBucket: "mern-estate-pritam.appspot.com",
  messagingSenderId: "686652982254",
  appId: "1:686652982254:web:537bfbbd02e5ebf75304ff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);