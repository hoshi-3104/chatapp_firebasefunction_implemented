import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import{getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC-viaiQ8ZSOUcGXBb0V6Zj-oDr34AB2YY",
  authDomain: "chatapp-c5e4f.firebaseapp.com",
  projectId: "chatapp-c5e4f",
  storageBucket: "chatapp-c5e4f.appspot.com",
  messagingSenderId: "1096301878193",
  appId: "1:1096301878193:web:05162f94dbbae66f47bb90",
  measurementId: "G-L9MCHJJWWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();