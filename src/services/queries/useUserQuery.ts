import { useQuery } from '@tanstack/react-query';
import { instance as axios } from '../api';
import useDecodedToken from "../../hooks/useDecodedToken";

export const useUserQuery = () => {
  const decodedToken = useDecodedToken();

  const result = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      if (!decodedToken) {
        throw new Error('Token is not available');
      }
      const { data } = await axios.get(`/users/${decodedToken.userId}`);
      return data;
    },
    enabled: !!decodedToken, // decodedToken이 존재할 때만 쿼리를 실행
    refetchOnWindowFocus: false,
    staleTime: 1000 * 30, // 30초
    placeholderData: [],
  });

  return result;
};

export const useUserCartQuery = () => {
  const decodedToken = useDecodedToken();

  const result = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      if (!decodedToken) {
        throw new Error('Token is not available');
      }
      const { data } = await axios.get(`/carts/${decodedToken.userId}`);
      return data;
    },
    enabled: !!decodedToken, // decodedToken이 존재할 때만 쿼리를 실행
    refetchOnWindowFocus: false,
    staleTime: 1000 * 30, // 30초
    placeholderData: [],
  });

  return result;
};
