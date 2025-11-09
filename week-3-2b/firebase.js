// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD09rP9CBKpURkR_h39NhIrMvPWN7Lqp2c",
  authDomain: "week-3-2b-e9e8c.firebaseapp.com",
  projectId: "week-3-2b-e9e8c",
  storageBucket: "week-3-2b-e9e8c.firebasestorage.app",
  messagingSenderId: "1051830478503",
  appId: "1:1051830478503:web:aa45cf929051e74aa21d82",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Google provider
export const provider = new GoogleAuthProvider();
provider.addScope("email");
provider.addScope("profile");
provider.setCustomParameters({ prompt: "select_account" });

export default app;
