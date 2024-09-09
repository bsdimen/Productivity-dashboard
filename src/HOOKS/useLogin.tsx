import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { FETCH_USER } from "../server/api"


interface user {
  email: string;
  password: string;
}

const useLogIn = (obj: user) => {

  const navigate = useNavigate();
  const mutate = useMutation({
    mutationFn: () => FETCH_USER(obj),
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
