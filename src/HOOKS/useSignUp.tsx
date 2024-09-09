import { ADD_USER } from "../server/api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

interface user {
  email: string;
  fullname: string;
  password: string;
}

const useSignUp = (obj: user) => {
  const navigate = useNavigate();

  const mutate = useMutation({
    mutationFn: () => ADD_USER(obj),
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