import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase/firebase.js";

export async function login(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function register(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function logout() {
  return await signOut(auth);
}
