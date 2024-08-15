import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: 'AIzaSyDLzonuL5fNC4oBVvKEEp79BaMeAi2Vr5U',
  authDomain: 'https://haki-ed7c8.firebaseapp.com/',
  projectId: 'haki-ed7c8',
  storageBucket: 'haki-ed7c8.appspot.com"',
  messagingSenderId: '863533099125',
  appId: '1:863533099125:web:d6ffc041dedb573415b03c"',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
