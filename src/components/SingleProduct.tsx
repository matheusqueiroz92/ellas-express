"use client"

import Link from "next/link";
import BackIcon from "./BackIcon";
import { useSingleProduct } from "@/hooks/useSingleProduct";
import { styled } from "styled-components";
import { formatPrice } from "@/utils/FormatPrice";
import { ButtonAddToCart } from "./ButtonAddToCart";

interface SingleProductProps {
  id: string
}

const ProductContainer = styled.div`
  display: flex;
  padding: 80px 160px;
  justify-content: center;
  width: 100%;
  gap: 32px;

  img {
    width: 640px;
    height: 580px;
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

  .container-left {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .container-right {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    width: 30%;
  }

  .container-mid {
    display: flex;
    flex-direction: column;
    gap: 100px;
  }

  .container-mid > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  

  .container-button {
    width: 100%;
  }

  #category {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  #title {
    font-size: 32px;
    font-weight: 300;
    line-height: 48px;
  }

  #price {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
  }

  #text {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }

  #description-title {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }

  #description {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }
  
`

export default function SingleProduct(props: SingleProductProps) {
  const { singleProduct } = useSingleProduct(props.id);

  return (
    <>
      {singleProduct?.map((element, index) =>
      <ProductContainer key={index}>
        <div className="container-left">
          <Link href="/">
            <BackIcon />
          </Link>
          <img src={element.image_url} alt={element.name}/>
        </div>
        <div className="container-right">
          <div className="container-mid">
            <div>
              <p id="category">{element.category}</p>
              <p id="title">{element.name}</p>
              <p id="price">{formatPrice(element.price_in_cents)}</p>
              <p id="text">Frete grátis para todo o Brasil nas compras acima de R$300,00</p>
            </div>
            <div>
              <p id="description-title">DESCRIÇÃO</p>
              <p id="description">{element.description}</p>
            </div>
          </div>
          <div className="container-button">
            <ButtonAddToCart/>
          </div>
        </div>
      </ProductContainer>
      )}
    </>
  )
}

