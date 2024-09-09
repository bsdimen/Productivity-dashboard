import { createUserWithEmailAndPassword } from "firebase/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { db } from "../firebase"; // Your Firestore configuration
import { doc, setDoc } from "firebase/firestore";


interface user {
  email: string;
  fullname: string;
  password: string;
}

const useSignUp = (obj: user) => {
  const navigate = useNavigate();

  const signUp = async ({ email, fullname, password }: user) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, obj.email, obj.password);
      const user = userCredential.user;

      // Save additional user data (if needed)
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        fullname: obj.fullname
      });

      return user;
    } catch (error) {
      if (error) {
        console.error("Firebase error during sign-up:", error);
      } else {
        console.error("Unexpected error during sign-up:", error);
      }
      throw error; // Re-throw the error if needed
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