// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

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

// Initialize Firebase Authentication dhe merr referencë për auth
export const auth = getAuth(app);

// Krijo Google Provider
export const provider = new GoogleAuthProvider();

// Shto scope për të marrë profile dhe email
provider.addScope('https://www.googleapis.com/auth/userinfo.email');
provider.addScope('https://www.googleapis.com/auth/userinfo.profile');

// Optional: Kjo bën që useri të zgjedhë account çdo herë
provider.setCustomParameters({
  prompt: "select_account"
});

const analytics = getAnalytics(app);
export default app;