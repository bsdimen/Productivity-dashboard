import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"


interface user {
  email: string;
  password: string;
}

const useLogIn = (obj: user) => {

  const signIn = async ({ email, password }: user) => {
    try {

      const userCredential = await signInWithEmailAndPassword(auth, obj.email, obj.password);
      const user = userCredential.user;

      const userData = {
        uid: userCredential.user.uid,
        email: userCredential.user.email
      };
      localStorage.setItem("login", JSON.stringify(userData));

      return { user };
    } catch (error) {
      console.error("Error during sign-in:", error);
      throw error;
    }
  }
  const navigate = useNavigate();
  const mutate = useMutation({
    mutationFn: () => signIn(obj),
    onSuccess: () => {
      navigate("/dashboard");
      console.log("USER ADDED");
    },
    onError: (error) => {
      console.error("Error adding user:", error);
    },
  });
  return mutate

};

export default useLogIn;
