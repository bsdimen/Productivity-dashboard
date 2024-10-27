import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from '../HOOKS/authContextServ';
import { auth } from "../firebase";
import { user } from "../TYPES/USER";
import { LoginProps } from "../TYPES/USER";

const useLogIn = (obj: LoginProps) => {
  const { setUser } = useAuth(); // Use setUser from Auth context
  const navigate = useNavigate();

  const signIn = async ({ email, password }: LoginProps) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userInfo = userCredential.user;

      const userData: user = {
        id: userCredential.user.uid,
        email: userCredential.user.email,
        password: null,
      };

      setUser(userData); // Set user data in context
    } catch (error) {
      console.error("Error during sign-in:", error);
      throw error;
    }
  };

  const { mutate, isError, isSuccess } = useMutation({
    mutationFn: () => signIn(obj),
    onSuccess: () => {
      navigate("/dashboard");
      console.log("USER LOGGED IN");
    },
    onError: (error) => {
      console.error("Error logging in user:", error);
    },
  });

  return { mutate, isError, isSuccess };
};

export default useLogIn;


