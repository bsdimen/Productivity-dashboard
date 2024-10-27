import { createUserWithEmailAndPassword } from "firebase/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { db } from "../firebase"; // Your Firestore configuration
import { doc, setDoc } from "firebase/firestore";
import { user } from "../TYPES/USER";
import { useAuth } from '../HOOKS/authContextServ';
import { useState } from "react";

const useSignUp = (obj: user) => {
  const navigate = useNavigate();
  const { setUser } = useAuth(); // Use setUser from Auth context

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

      // Set the user in context after sign-up
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