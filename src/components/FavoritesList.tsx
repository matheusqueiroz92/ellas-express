"use client"

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Product } from "@/types/ProductType";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { ButtonBack } from "./Buttons/ButtonBack";
import ProductFavorite from "./ProductFavorite";

export default function FavoritesList() {
  const { value, updateLocalStorage } = useLocalStorage<Product[]>('favorites-items', []);

  const [itemsFavorites, setItemsFavorites] = useState(true);

  const router = useRouter();

  const handleDeleteItem = (idProduct: string) => {
    const newValue = value.filter((item) => {
      if (item.id !== idProduct) return item;
    })
    updateLocalStorage(newValue);
  }

  const ContainerExtern = styled.div`
    h1 {
      margin-top: 30px;
      color: var(--text-dark-secondary);
    }
  `
  
  const ContainerListFavorites = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
      color: var(--text-dark-secondary);
      margin-top: 12px;
    }

    > p {
      margin-bottom: 12px;
      color: var(--text-dark);
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
  `

  useEffect(() => {
    if (value.length === 0) setItemsFavorites(false);
    else setItemsFavorites(true);
  }, [value]);

  return (
    <ContainerExtern>
      <ButtonBack navigate="/"/>
      {itemsFavorites &&
        <ContainerListFavorites>
          <h2>Lista de Favoritos</h2>
          <p>({value.length} produtos)</p>
          <div>
            {value.map((product) => (
              
              <ProductFavorite
                key={product.id}
                image={product.image_url}
                title={product.name}
                price={product.price_in_cents}
                description={product.description}
                id={product.id}
                handleDelete={handleDeleteItem}
              />
              
            ))}
          </div>
        </ContainerListFavorites>
      }
      {!itemsFavorites &&
        <h1>Não há itens favoritos</h1>
      }
    </ContainerExtern>
  )
}