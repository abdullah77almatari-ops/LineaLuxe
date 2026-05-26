import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "linea-luxe-e021c.firebaseapp.com",
  projectId: "linea-luxe-e021c",
  storageBucket: "linea-luxe-e021c.appspot.com",
  messagingSenderId: "438705566747",
  appId: "1:438705566747:web:84bfa34261e22d6d58f4be",
  measurementId: "G-2FCDZZR0GJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, onAuthStateChanged };
