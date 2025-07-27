import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase Config
export const firebaseConfig = {
  apiKey: "AIzaSyB9STT6v9h6o6S4Nfq0JbgfJCLTYQ4GhwE",
  authDomain: "omniplex-test-1cc9d.firebaseapp.com",
  projectId: "omniplex-test-1cc9d",
  storageBucket: "omniplex-test-1cc9d.firebasestorage.app",
  messagingSenderId: "809162270780",
  appId: "1:809162270780:web:61aebf5eb3d0309c197b39",
  measurementId: "G-XY2GXC34QF",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

export const initializeFirebase = () => {
  return app;
};
