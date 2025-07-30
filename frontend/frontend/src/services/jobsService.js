import { get } from '../utils/getApi';

export const fetchJobs = async () => {
  return await get('/jobs');
};

export const postJob = async () => {
  return await get('/post-job')
}