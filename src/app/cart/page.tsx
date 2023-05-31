"use client"

import BackIcon from "@/components/Icons/BackIcon";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { formatPrice } from "@/utils/FormatPrice";
import { styled } from "styled-components";

export default function Cart() {
  const { value } = useLocalStorage('cart-items', []);

  const sumItems = value.reduce((acc: any, cur: { quantity: any; }) => acc + cur.quantity, 0);
  
  return (
    <div>
      <BackIcon/>
      <h2>Seu Carrinho</h2>
      <p>Total de produtos ({sumItems})</p>
      {value.map((element) => (
        <div>
          <img src={element.image_url} alt={element.name}/>
          <div>
            <h2>Nome</h2>
            <p>{element.description}</p>
            <p>{formatPrice(element.price_in_cents)}</p>
            <input
              type="text"
              value={element.quantity }
            />
          </div>
        </div>
      ))}
    </div>
  )
}