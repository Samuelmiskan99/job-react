// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
   apiKey: 'AIzaSyDwOp9CVFikK5Q-ZPRJz5OecGpa3b2VfdY',
   authDomain: 'ambatujobs-loginauth.firebaseapp.com',
   projectId: 'ambatujobs-loginauth',
   storageBucket: 'ambatujobs-loginauth.appspot.com',
   messagingSenderId: '338700450215',
   appId: '1:338700450215:web:ff2bcafa89feb2d000de82',
   measurementId: 'G-96C0XHRXPC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
