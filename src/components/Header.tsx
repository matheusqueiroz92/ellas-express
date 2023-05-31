"use client"

import React, { useState } from "react";
import { styled } from "styled-components";
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWithSearchIcon } from "./PrimaryInput";
import { CartControl } from "./CartControl";
import { useFilter } from "@/hooks/useFilter";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { formatPrice } from "@/utils/FormatPrice";

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
  left: 75%;
  width: 20vw;
  height: 50vh;
  /* overflow-y: scroll; */
  background-color: #bebebe;
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

  button {
    padding: 10px;
    border: none;
    width: 100%;
    border-radius: 3px;
    text-transform: uppercase;
  }

  button:hover {
    background: gainsboro;
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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
  const { value } = useLocalStorage('cart-items', []);
  const [miniCart, setMiniCart] = useState(false);

  console.log(value);
  

  const router = useRouter();
  
  const handleNavigateCart = () => {
    router.push('/cart');
    setMiniCart(prev => !prev);
  }

  const showMiniCart = () => {
    setMiniCart(prev => !prev);
  }

  return (
    <div>
      <TagHeader>
        <Link href="/">
          <Logo className={sairaStencil.className}>
            Fashion Express
          </Logo>
        </Link>
        <div>
          <PrimaryInputWithSearchIcon
            value={search}
            handleChange={setSearch}
            placeholder="Procurando por algo específico?"
          />
          <button
            type="button"
            onClick={showMiniCart}
          >
            <CartControl/>
          </button>
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
              <h3>{element.name}</h3>
              <input
                type="text"
                value={ element.quantity }
              />
              <h4>{formatPrice(element.price_in_cents)}</h4>
            </div>
          ))}
          <button
            type="button"
            onClick={handleNavigateCart}
          >Ir para o carrinho</button>
        </ContainerMiniCart>
      )}
    </div>
  )

}