import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAvFvaVB34alRcmSxY2CZmrgqUX9jFfaB8",
  authDomain: "netflixmern-5e049.firebaseapp.com",
  projectId: "netflixmern-5e049",
  storageBucket: "netflixmern-5e049.appspot.com",
  messagingSenderId: "177003190370",
  appId: "1:177003190370:web:5b7baa2fc98764d33e993b",
  measurementId: "G-3H6QKE59TL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);