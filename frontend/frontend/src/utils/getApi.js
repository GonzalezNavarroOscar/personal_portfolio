import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
});


// API interceptor to include a token
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');

    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config
})


// Login method with credentials
export const loginApi = async (credentials) => {
  try {
    const response = await api.post('/login', credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Register method with user data
export const registerApi = async (user_data) => {

  try{
    const response = await api.post('/register',user_data );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }

};

// GET Method for any endpoint
export const get = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
};
