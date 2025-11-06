// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD09rP9CBKpURkR_h39NhIrMvPWN7Lqp2c",
  authDomain: "week-3-2b-e9e8c.firebaseapp.com",
  projectId: "week-3-2b-e9e8c",
  storageBucket: "week-3-2b-e9e8c.firebasestorage.app",
  messagingSenderId: "1051830478503",
  appId: "1:1051830478503:web:aa45cf929051e74aa21d82",
  measurementId: "G-SPXXCB4P5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

export default app;