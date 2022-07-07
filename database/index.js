import { initializeApp, getApps } from 'firebase/app';
import { Database } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyDkiU0ZrMEbNrky_oydrJYM4Ql2vJqXFso",
    authDomain: "financeapp-4b450.firebaseapp.com",
    projectId: "financeapp-4b450",
    storageBucket: "financeapp-4b450.appspot.com",
    messagingSenderId: "828617697189",
    appId: "1:828617697189:web:5c0348315999bf94cfaa4c"
};

if (getApps().length < 1) {
    initializeApp(firebaseConfig);
}
