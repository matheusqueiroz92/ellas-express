import { ProductsResponse } from "@/types/ProductsResponse";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (): AxiosPromise<ProductsResponse> => {
  return axios.post(
    API_URL,
    {
      query: `query {
        allProducts {
          id
          image_url
          name
          price_in_cents
        }
      }`
  }) //todas as requisições para uma API GraphQL são requisições post e manda a query no body
}

export function useProduct() {
  const { data } = useQuery({
    queryFn: fetcher,
    queryKey: ['products']
  });

  return {
    data: data?.data?.data?.allProducts
  }
}