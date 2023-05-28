import axios, { AxiosPromise } from "axios";
import { ProductsResponse } from "@/types/ProductsResponse";
import { useQuery } from "@tanstack/react-query";
import { useFilter } from "./useFilter";
import { filterQuery } from "@/utils/GetFilters";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsResponse> => {
  return axios.post(API_URL, { query }) //todas as requisições para uma API GraphQL são requisições post e manda a query no body
}

export function useProducts() {
  const { type, priority, search } = useFilter();
  const searchDeferred = useDeferredValue(search);
  
  const query = filterQuery(type, priority)
  
  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ['products', type, priority]
  });

  const allProducts = data?.data?.data?.allProducts;
  const filteredProducts = allProducts?.
    filter(product => product.name.toLowerCase().includes(searchDeferred.toLowerCase()));
  
  return {
    data: filteredProducts
  }
}