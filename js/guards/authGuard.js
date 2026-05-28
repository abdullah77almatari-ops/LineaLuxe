import { auth, onAuthStateChanged } from "@/firebase/firebase.js";

export function requireAuth() {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "/login.html";
    }
  });
}
