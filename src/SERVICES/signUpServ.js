import axios from 'axios';

export const handleSignUp = async (formData) => {
  try {
    const response = await axios.post('http://localhost:3500/users', formData);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};