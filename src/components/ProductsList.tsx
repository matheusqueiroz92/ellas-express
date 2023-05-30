"use client"

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./ProductCard";
import { styled } from "styled-components";
import Link from "next/link";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  gap: 50px;
  max-width: 100%;
  margin-top: 32px;

  a {
    text-decoration: none;
  }

  a:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`

export function ProductList() {
  const { data } = useProducts();
  
  return (
    <ListContainer>
      {data?.map((product) => (
        <Link href={`/product/${product.id}`}>
          <ProductCard
            key={product.id}
            image={product.image_url}
            title={product.name}
            price={product.price_in_cents}
          />
        </Link>
      ))}
    </ListContainer>
  )
}