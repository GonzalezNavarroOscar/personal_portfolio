import { get } from '../utils/getApi';

export const fetchUsers = async () => {
  return await get('/users');
};

