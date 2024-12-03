import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const authenticateUser = async (credential) => {
  try {
    const response = await axios.post(`${API_URL}/auth/google`, { credential });
    return response.data;
  } catch (error) {
    throw new Error('Authentication failed');
  }
};