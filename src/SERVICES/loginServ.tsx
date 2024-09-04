import { useQuery, QueryFunctionContext } from '@tanstack/react-query';
import axios from 'axios';
import { User } from '../TYPES/USER';

interface LoginParams {
  email: string;
  password: string;
}
const fetchUser = async ({ email, password }: LoginParams): Promise<User> => {

  const response = await axios.post('http//localhost:3500/users', { email, password });
  if (response) {
    console.log(response)
    return response.data;
  }
  else {
    throw new Error("you forgot your password");
  }
};

export const useLogin = (email: string, password: string) => {

  const shouldQuery = !!email && !!password;

  if (shouldQuery) {
    const query = useQuery({
      queryKey: ["login"],
      queryFn: () => { fetchUser },
    })
    return query
  }

}
