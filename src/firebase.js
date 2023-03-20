import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAlMMbY4AKgdeHzuBuV5Hjxa8Efs708_Ek",
    authDomain: "chat-app-1b5eb.firebaseapp.com",
    projectId: "chat-app-1b5eb",
    storageBucket: "chat-app-1b5eb.appspot.com",
    messagingSenderId: "527314676804",
    appId: "1:527314676804:web:da450cfb3f1f0cce9c2011"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()