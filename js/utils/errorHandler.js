export function getFirebaseErrorMessage(error) {
  switch (error.code) {
    case "auth/invalid-credential":
      return "Invalid email or password";

    case "auth/email-already-in-use":
      return "Email already exists";

    case "auth/weak-password":
      return "Password is too weak";

    default:
      return "Something went wrong";
  }
}
