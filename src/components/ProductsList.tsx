"use client"

import { useProduct } from "@/hooks/useProducts"

interface ProductListProps {

}

export function ProductList(props: ProductListProps) {
  const { data } = useProduct();
  console.log(data);
  
  
  return (
    <></>
  )
}