"use client"

import { ButtonBack } from "@/components/Buttons/ButtonBack";
import { DefaultLayout } from "@/components/DafaultLayout";
import { CartItem } from "@/components/cart/CartItem";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/ProductType";
import { formatPrice } from "@/utils/FormatPrice";
import { styled } from "styled-components";

export default function Cart() {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>('cart-items', []);

  const qtdItems = value.reduce((acc: any, cur: { quantity: any; }) => acc + cur.quantity, 0);
  
  const sumValues = (value: ProductInCart[]) => {
    return value.reduce((acc, cur) => acc + (cur.price_in_cents * cur.quantity),0)
  }

  const totalCart = formatPrice(sumValues(value));

  const handleUpdateQty = (idProduct: string, newQuantity: number) => {
    const newValue = value.map((item) => {
      if (item.id !== idProduct) return item;
      return {...item, quantity: newQuantity }
    })
    updateLocalStorage(newValue);
    console.log(newValue);
  }

  const ContainerExtern = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  `

  const CartListContainer = styled.div`
    margin-top: 24px;

    h3 {
      font-size: 24px;
      font-weight: 500;
      line-height: 150%;
      text-transform: uppercase;
      color: var(--text-dark-secondary);
    }

    p {
      font-size: 16px;
      font-weight: 300;
      line-height: 150%;
      color: var(--text-dark-secondary);

      span {
        font-weight: 600;
      }
    }
  `
  
  const CartList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    margin-top: 20px;
  `
  
  const ContainerSummaryOrder = styled.div`
    display: flex;
    flex-direction: column;
  `

  return (
    <DefaultLayout>
      <ContainerExtern>
        <ButtonBack navigate="/"/>
        <CartListContainer>
          <h3>Seu Carrinho</h3>
          <p>
            Total ({qtdItems} produtos):
            {' '}
            <span>{totalCart}</span>
          </p>
          <CartList>
          {value.map((item) => (
            <CartItem product={item} key={item.id} handleUpdateQty={handleUpdateQty}/>
          ))}
          </CartList>
        </CartListContainer>
        {/* <ContainerSummaryOrder>
          <h2>Resumo do pedido</h2>
        </ContainerSummaryOrder> */}
      </ContainerExtern>
    </DefaultLayout>
  )
}