import { get } from '../utils/getApi';

export const fetchJobs = async () => {
  return await get('/jobs');
};