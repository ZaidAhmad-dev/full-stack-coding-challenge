import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB_bWinHS1sNu1SSup4tWOBnL3FYJyeyQk",
    authDomain: "full-stack-coding-challe-774b6.firebaseapp.com",
    projectId: "full-stack-coding-challe-774b6",
    storageBucket: "full-stack-coding-challe-774b6.appspot.com",
    messagingSenderId: "484346414695",
    appId: "1:484346414695:web:1f6939808d8c39b51276c2",
    measurementId: "G-YXLEMYPJS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;