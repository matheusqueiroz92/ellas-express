"use client"

import React, {  useEffect, useState } from "react";
import { styled } from "styled-components";
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWithSearchIcon } from "./PrimaryInput";
import { CartControl } from "./CartControl";
import { useFilter } from "@/hooks/useFilter";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { formatPrice } from "@/utils/FormatPrice";
import { ProductInCart } from "@/types/ProductType";

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
})

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  position: relative;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }

  button:hover {
    transform: scale(1.1);
  }

  a {
    text-decoration: none;
  }

  @media (min-width: ${props => props.theme.desktopBreakPoint}) {
    padding: 20px 160px;
  }
`
const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  cursor: pointer;

  @media (min-width: ${props => props.theme.tabletBreakPoint}) {
    font-size: 24px;
  }

  @media (min-width: ${props => props.theme.desktopBreakPoint}) {
    font-size: 40px;
  }

`
const ContainerMiniCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  right: 150px;
  width: 21vw;
  height: 50vh;
  overflow-y: scroll;
  background-color: #cacaca;
  position: absolute;
  z-index: 999;
  border-radius: 5px;
  gap: 20px;
  padding: 10px 10px 20px 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

  h2 {
    text-transform: uppercase;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 5px

  }

  input {
    width: 30px;
    height: 30px;
    padding: 5px;
  }

  /* button {
    padding: 10px;
    border: none;
    width: 100%;
    border-radius: 3px;
    text-transform: uppercase;
    cursor: pointer;
  }

  button:hover {
    background: var(--orange-low);
    font-weight: 700;
  } */

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 14px;
  }

  .infos {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`

export default function Header() {
  const { setSearch, search } = useFilter();
  const { value } = useLocalStorage<ProductInCart[]>('cart-items', []);
  const [isCart, setIsCart] = useState(true);
  const [miniCart, setMiniCart] = useState(false);

  const router = useRouter();
  const pathName = usePathname();  

  useEffect(() => {
    if (pathName === '/cart') setIsCart(false);
    else setIsCart(true);
  }, [pathName])
  
  const handleNavigateCart = () => {
    router.push('/cart');
  }

  const showMiniCart = () => {
    if (value.length > 0) {
      setMiniCart(true);
    }
  }

  const hiddenMiniCart = () => {
    setMiniCart(false);
  }

  return (
    <div>
      <TagHeader>
        <Logo className={sairaStencil.className} href="/">
          Fashion Express
        </Logo>
        <div>
          <PrimaryInputWithSearchIcon
            value={search}
            handleChange={setSearch}
            placeholder="Procurando por algo específico?"
          />
          {isCart && (
            <button
              type="button"
              onClick={handleNavigateCart}
              onMouseEnter={showMiniCart}
              onMouseLeave={hiddenMiniCart}
            >
              <CartControl/>
            </button>
          )}
        </div>
      </TagHeader>
      {miniCart && (
        <ContainerMiniCart>
          <h2>Carrinho</h2>
          <div className="head">
            <p>Imagem</p>
            <p>Nome do produto</p>
            <p>Quant.</p>
            <p>Valor unit.</p>
          </div>
          {value.map((element, index) => (
            <div className="infos" key={index}>
              <img src={element.image_url} />
              <h4>{element.name}</h4>
              <input
                type="text"
                value={ element.quantity }
              />
              <h4>{formatPrice(element.price_in_cents)}</h4>
            </div>
          ))}
          {/* <button
            type="button"
            onClick={handleNavigateCart}
          >Ir para o carrinho</button> */}
        </ContainerMiniCart>
      )}
    </div>
  )

}