import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Web app configuration. These values are public by design; access is
// controlled by Firebase Authentication and Realtime Database rules.
const firebaseConfig = {
  apiKey: "AIzaSyCPxBrQk6u1TfboUfkJ-_BZ3fLe1f4MUDY",
  authDomain: "portfolio-4dbb8.firebaseapp.com",
  databaseURL: "https://portfolio-4dbb8-default-rtdb.firebaseio.com",
  projectId: "portfolio-4dbb8",
  storageBucket: "portfolio-4dbb8.firebasestorage.app",
  messagingSenderId: "72775417430",
  appId: "1:72775417430:web:32a568094d1a53108985f7",
  measurementId: "G-170YGJCLCB",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
