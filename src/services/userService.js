import axios from 'axios';

const API_URL = 'http://localhost:8081';

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const getUsers = async () => {
  return axios.get(`${API_URL}/users`);
};