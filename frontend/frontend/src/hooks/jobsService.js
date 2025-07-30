import { get,post } from '../utils/getApi';

export const fetchJobs = async () => {
  return await get('/jobs');
};

export const postJob = async (details) => {
  return await post('/post-job',details);
};