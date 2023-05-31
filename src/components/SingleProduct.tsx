"use client"

import { useSingleProduct } from "@/hooks/useSingleProduct";
import { styled } from "styled-components";
import { ButtonAddToCart } from "./Buttons/ButtonAddToCart";
import { formatPrice } from "@/utils/FormatPrice";
import { execFile } from "child_process";

interface SingleProductProps {
  id: string,
}

const ProductContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 32px;

  img {
    max-width: 640px;
    width: 50%;
  }

  > div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  button {
    background: #115D8C;
    border: none;
    border-radius: 4px;
    padding: 10px 100px;
    cursor: pointer;
    width: 100%;
  }

  button:hover {
    background: #428ebd;
  }
`

const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-secondary);
  }

  h2 {
    font-weight: 300;
    font-size: 32px;
    line-height: 150%;
    color: var(--text-dark-secondary);
    margin-top: 12px;
  }

  span:nth-of-type(2) {
    font-weight: 600;
    font-size: 20px;
    color: var(--shapes-dark);
    margin-bottom: 24px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    color: var(--text-dark-secondary);
  }

  div {
    margin-top: 30px;
    
    h3 {
      color: var(--text-dark);
      font-weight: 500;
      font-size: 16px;
    }

    p {
    font-weight: 400;
    font-size: 14px;
    color: var(--text-dark-secondary);
  }

  }
`

export default function SingleProduct({id}: SingleProductProps) {
  const { singleProduct } = useSingleProduct(id);

  return (
      <ProductContainer>
        <img src={singleProduct?.image_url} alt={singleProduct?.name}/>
        <div>
          <ProductInfo>
            <span>{singleProduct?.category}</span>
            <h2>{singleProduct?.name}</h2>
            <span>{formatPrice(singleProduct?.price_in_cents ?? 0)}</span>
            <p>* Frete grátis para todo o Brasil nas compras acima de R$300,00</p>
            <div>
              <h3>DESCRIÇÃO</h3>
              <p>{singleProduct?.description}</p>
            </div>
          </ProductInfo>
          <ButtonAddToCart/>
        </div>
      </ProductContainer>
  )
}
