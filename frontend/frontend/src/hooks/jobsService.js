import { get,post } from '../utils/getApi';

export const fetchJobs = async (employer_id) => {
  return await get('/job-seeker-jobs',employer_id);
};

export const postJob = async (details) => {
  return await post('/post-job',details);
};