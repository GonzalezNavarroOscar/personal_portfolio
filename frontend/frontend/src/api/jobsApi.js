import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const fetchJobs = async () => {
  const response = await axios.get(`${API_URL}/api/jobs`);
  return response.data;
};