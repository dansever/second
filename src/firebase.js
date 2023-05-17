// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD--0vAWaDUdhckLlQ5ze8tNKYIKApkoc4",
    authDomain: "second-app-2529e.firebaseapp.com",
    projectId: "second-app-2529e",
    storageBucket: "second-app-2529e.appspot.com",
    messagingSenderId: "256374332875",
    appId: "1:256374332875:web:6deb44f1e67a43e4012a4e",
    measurementId: "G-17XECDDW0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);