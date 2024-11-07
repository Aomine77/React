// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArtdkS3HMVOXD-6x1_FJZ4ZIrNEQkAYwA",
  authDomain: "react-a810f.firebaseapp.com",
  projectId: "react-a810f",
  storageBucket: "react-a810f.firebasestorage.app",
  messagingSenderId: "453087323860",
  appId: "1:453087323860:web:8ae2c9a02666a57758fd41",
  measurementId: "G-F7GGFY7CR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Firestore
export const db = getFirestore(app);

// Error handling helper
export const getAuthErrorMessage = (error) => {
  switch (error.code) {
    case 'auth/operation-not-allowed':
      return 'This authentication method is not enabled. Please contact support.';
    case 'auth/popup-closed-by-user':
      return 'The sign-in popup was closed before completing authentication.';
    case 'auth/cancelled-popup-request':
      return 'The sign-in was cancelled.';
    case 'auth/invalid-email':
      return 'The email address is invalid.';
    case 'auth/user-disabled':
      return 'This account has been disabled.';
    case 'auth/user-not-found':
      return 'No account found with this email.';
    case 'auth/wrong-password':
      return 'Incorrect password.';
    case 'auth/invalid-credential':
      return 'Invalid credentials. Please try again.';
    case 'auth/too-many-requests':
      return 'Too many failed attempts. Please try again later.';
    case 'auth/email-already-in-use':
      return 'This email is already registered. Please use a different email or login.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters long.';
    default:
      return 'An error occurred. Please try again.';
  }
};

// Configure Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export default app; 