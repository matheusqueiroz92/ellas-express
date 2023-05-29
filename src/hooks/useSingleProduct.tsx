import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "@/utils/GetFilters";
import { ProductsResponse } from "@/types/ProductsResponse";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsResponse> => {
  return axios.post(API_URL, { query }) //todas as requisições para uma API GraphQL são requisições post e manda a query no body
}

export function useSingleProduct(id: string) {
  const query = getProductById(id)
  
  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ['products']
  });

  const singleProduct = data?.data?.data?.allProducts;

  return {
    singleProduct
  }
}