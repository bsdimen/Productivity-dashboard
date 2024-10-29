/**
 * `useSignUp` is a custom hook that manages user registration by:
 * 1. Creating a new user in Firebase Authentication.
 * 2. Storing the user's details in Firestore.
 * 3. Updating the user data in the global `AuthContext` after successful sign-up.
 * 4. Redirecting to the dashboard upon successful registration.
 *
 * Parameters:
 * - `obj: user`: An object containing the user's details for sign-up (fields: `email`, `password`, and `name`).
 *
 * Internally:
 * - `signUp`: Asynchronous function to handle user sign-up.
 *   - Checks for required fields (`email`, `password`, and `name`).
 *   - Registers the user with Firebase Authentication and stores their details in Firestore.
 *   - Updates the `AuthContext` using `setUser` to manage global authentication state.
 *
 * - `useMutation`: Manages the mutation lifecycle using React Query's `useMutation`.
 *   - `mutationFn`: Initiates the `signUp` function with the `obj` user data.
 *   - `onSuccess`: Redirects to the `/dashboard` page and logs the success message.
 *   - `onError`: Logs an error message if sign-up fails.
 *
 * Usage:
 * Call `mutate()` to trigger the sign-up process, which creates a new user in Firebase, updates Firestore,
 * sets the global user state, and redirects on success.
 *
 * Example:
 * ```typescript
 * const { mutate: signUpUser } = useSignUp({ email: "test@example.com", password: "password123", name: "Test User" });
 *
 * // Call signUpUser() to start the sign-up process.
 * signUpUser();
 * ```
 */

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { db } from "../firebase"; // Your Firestore configuration
import { doc, setDoc } from "firebase/firestore";
import { user } from "../TYPES/USER";
import { useAuth } from '../HOOKS/authContextServ';

const useSignUp = (obj: user) => {
  const navigate = useNavigate();
  const { setUser } = useAuth(); // Access setUser from Auth context to update user state

  const signUp = async (userData: user) => {
    if (!userData.email || !userData.password || !userData.name) {
      return null;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password!);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        name: userData.name,
      });

      // Update user context with new user info
      const userInfo = {
        id: user.uid,
        email: user.email,
        name: userData.name,
        password: null
      };
      setUser(userInfo);

      return user;
    } catch (error) {
      console.error("Firebase error during sign-up:", error);
      throw error;
    }
  };

  const mutate = useMutation({
    mutationFn: () => signUp(obj),
    onSuccess: () => {
      navigate("/dashboard");
      console.log("USER ADDED");
    },
    onError: (error) => {
      console.error("Error adding user:", error);
    },
  });

  return mutate;
};

export default useSignUp;
