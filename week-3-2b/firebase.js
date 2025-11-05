// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUcOAIYVlffN40L-ZDbc2XCAk_G2XTqzc",
  authDomain: "my-login-app-30ddd.firebaseapp.com",
  projectId: "my-login-app-30ddd",
  storageBucket: "my-login-app-30ddd.firebasestorage.app",
  messagingSenderId: "1008413766201",
  appId: "1:1008413766201:web:aa1b4eb322e192400813e8",
  measurementId: "G-2HY37GJCMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;