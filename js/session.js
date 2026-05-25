import { auth, onAuthStateChanged } from "./firebase.js";

export function watchUser(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}
