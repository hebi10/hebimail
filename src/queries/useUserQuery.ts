import { useQuery } from 'react-query';
import { instance as axios } from '../services/api';

export const useUserQuery = () => {
  return useQuery('user', async () => {
    const { data } = await axios.get('/user');
    return data;
  });
};
