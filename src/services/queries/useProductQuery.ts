import { useQuery } from '@tanstack/react-query';
import { instance_render as axios } from '../api';

export const useProductQuery = () => {
  const result = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await axios.get(`/products`);
      return data;
    },
    refetchOnWindowFocus: false,
    placeholderData: [
      {
        "id": 1,
        "name": "상품 로딩중",
        "description": "로딩중 1",
        "price": 100,
        "imgUrl": "https://placeholder.com/300",
        "category": "Electronics"
      },
      {
        "id": 2,
        "name": "상품 로딩중",
        "description": "로딩중 2",
        "price": 200,
        "imgUrl": "https://placeholder.com/300",
        "category": "Books"
      },
      {
        "id": 3,
        "name": "상품 로딩중",
        "description": "로딩중 3",
        "price": 300,
        "imgUrl": "https://placeholder.com/300",
        "category": "Clothing"
      }
    ],
  });

  return result;
};

export const useFindProductQuery = (id: number) => {
  const result = useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const { data } = await axios.get(`/products/${id}`);
      return data;
    },
    refetchOnWindowFocus: false,
    placeholderData: {
      "id": id,
      "name": "상품 로딩중",
      "description": `로딩중 ${id}`,
      "price": 100,
      "imgUrl": "https://placeholder.com/300",
      "category": "Electronics"
    }
  });

  return result;
};

