import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { ProductResponse } from "@/types/ProductResponse";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (productId: string): AxiosPromise<ProductResponse> => {
  return axios.post(API_URL, { query: `
    query {
      Product(id: "${productId}") {
        id
        image_url
        name
        price_in_cents
        category
        description
      }
    } `
  });
};

//todas as requisições para uma API GraphQL são requisições post e manda a query no body

export function useSingleProduct(id: string) {
  const { data } = useQuery({
    queryFn: () => fetcher(id),
    queryKey: ['product', id],
    enabled: !!id,
    staleTime: 1000 * 60 * 5 // tempo de atualização da requisição à API
  });

  const singleProduct = data?.data?.data?.Product;

  return {
    singleProduct
  }
}