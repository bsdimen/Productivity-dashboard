
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA-oKzdT_w7Dh4UlKh5nlbnS1aZoKOYdFQ",
    authDomain: "woorkie-8bde8.firebaseapp.com",
    projectId: "woorkie-8bde8",
    storageBucket: "woorkie-8bde8.appspot.com",
    messagingSenderId: "1029695890594",
    appId: "1:1029695890594:web:5a61d81a5ab338d4c3a3fb",
    measurementId: "G-MT022HQ10D"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);