const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyB_bWinHS1sNu1SSup4tWOBnL3FYJyeyQk",
  authDomain: "full-stack-coding-challe-774b6.firebaseapp.com",
  projectId: "full-stack-coding-challe-774b6",
  storageBucket: "full-stack-coding-challe-774b6.appspot.com",
  messagingSenderId: "484346414695",
  appId: "1:484346414695:web:1f6939808d8c39b51276c2",
  measurementId: "G-YXLEMYPJS2"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("users");
const Products = db.collection("products");
const getStorage = firebase.storage();
module.exports = { User, Products, getStorage };
