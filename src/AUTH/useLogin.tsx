/**
 * `useLogIn` is a custom hook that handles user login using Firebase authentication
 * and manages the login state in a global authentication context. It also provides
 * mutation status indicators (`isError`, `isSuccess`) and a `mutate` function to
 * trigger the login process.
 *
 * Parameters:
 * - `obj: LoginProps`: An object containing the login credentials (`email` and `password`).
 *
 * Functionality:
 * - `signIn`: Asynchronous function to handle login using Firebase's `signInWithEmailAndPassword`.
 *   It takes an `email` and `password` from `LoginProps`, performs the authentication,
 *   and then updates the `AuthContext` with the user's data if login is successful.
 *
 *   - On success: Extracts the user info from the Firebase response, formats the `user` object,
 *     and updates the `AuthContext` using `setUser`.
 *   - On error: Logs the error to the console and rethrows it for further handling if needed.
 *
 * - `useMutation`: Uses React Query’s `useMutation` to manage the mutation state of the `signIn` function.
 *   - `mutationFn`: Executes the `signIn` function using the credentials provided in `obj`.
 *   - `onSuccess`: Upon successful login, navigates the user to the `/dashboard` route and logs
 *     "USER LOGGED IN" to the console.
 *   - `onError`: If the login attempt fails, logs an error message to the console.
 *
 * Returns:
 * - `{ mutate, isError, isSuccess }`:
 *   - `mutate`: Function to trigger the login process using the provided credentials.
 *   - `isError`: Boolean indicating whether the login attempt failed.
 *   - `isSuccess`: Boolean indicating if the login attempt was successful.
 *
 * // Call logIn to trigger the sign-in process
 * logIn();
 * ```
 */
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


