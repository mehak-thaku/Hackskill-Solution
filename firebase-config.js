// Firebase Configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdYWB0ddhicAWje7rNDdRuIG4PoXtucY0",
  authDomain: "immersive-and-inclusive-edu.firebaseapp.com",
  projectId: "immersive-and-inclusive-edu",
  storageBucket: "immersive-and-inclusive-edu.firebasestorage.app",
  messagingSenderId: "743727499170",
  appId: "1:743727499170:web:2770dce0b35cba65e5d4fb",
  measurementId: "G-56SS97JCS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

