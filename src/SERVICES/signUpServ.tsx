import axios from 'axios';

interface handleSignUpProps {
  fullname: string;
  email: string;
  password: string;
}

export const handleSignUp = async (formData: handleSignUpProps) => {
  try {
    const response = await axios.post('http://localhost:3500/users', formData);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};