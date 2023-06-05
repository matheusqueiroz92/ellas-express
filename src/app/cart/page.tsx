"use client"

import { ButtonBack } from "@/components/Buttons/ButtonBack";
import { DefaultLayout } from "@/components/DafaultLayout";
import { Divider } from "@/components/Divider";
import { CartItem } from "@/components/cart/CartItem";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/ProductType";
import { formatPrice } from "@/utils/FormatPrice";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

export default function CartPage() {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>('cart-items', []);

  const qtdItems = value.reduce((acc: any, cur: { quantity: any; }) => acc + cur.quantity, 0);

  const [itemsCart, setItemsCart] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (value.length === 0) setItemsCart(true);
    else setItemsCart(false);
  }, [value]);
  
  const sumValues = (value: ProductInCart[]) => {
    return value.reduce((acc, cur) => acc + (cur.price_in_cents * cur.quantity),0)
  }

  const delivery = 4000;

  const totalCart = formatPrice(sumValues(value));

  const totalCartWithDelivery = formatPrice(sumValues(value) + delivery);

  const handleUpdateQty = (idProduct: string, newQuantity: number) => {
    const newValue = value.map((item) => {
      if (item.id !== idProduct) return item;
      return {...item, quantity: newQuantity }
    })
    updateLocalStorage(newValue);
  }

  const handleDeleteItem = (idProduct: string) => {
    const newValue = value.filter((item) => {
      if (item.id !== idProduct) return item;
    })
    updateLocalStorage(newValue);
  }

  const handleNavigate = () => {
    router.push('/checkout');
  }

  const ContainerExtern = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    h1 {
      margin-top: 30px;
      color: var(--text-dark-secondary);
    }
  `
  
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 32px;

    @media (min-width: ${props => props.theme.desktopBreakPoint}) {
      flex-direction: row;
    }
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
  
  const SummaryOrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: white;
    padding: 16px 24px;
    border-radius: 8px;
    min-width: 352px;

    h3 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 30px;
      text-transform: uppercase;
      color: var(--text-dark-secondary);
    }

    button {

    }
  `

  const TotalSummary = styled.div<{ isBold: boolean}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 16px;
    font-weight: ${props => props.isBold ? '600' : '400'} ;
    line-height: 150%;
    margin-bottom: 12px;
  `

  const CheckoutButton = styled.button`
    color: white;
    border-radius: 4px;
    background-color: var(--checkout-button);
    border: none;
    padding: 12px;
    width: 100%;
    margin-top: 40px;
    cursor: pointer;
  `

  return (
    <DefaultLayout>
        <ContainerExtern>
          <ButtonBack navigate="/"/>
          {itemsCart && 
            <h1>O carrinho está vazio</h1>
          }
          {!itemsCart &&
            <Container>
              <CartListContainer>
                <h3>Seu Carrinho</h3>
                <p>
                  Total ({qtdItems} produtos):
                  {' '}
                  <span>{totalCart}</span>
                </p>
                <CartList>
                  {value.map((item) => (
                    <CartItem
                      product={item}
                      key={item.id}
                      handleUpdateQty={handleUpdateQty}
                      handleDelete={handleDeleteItem}
                    />
                  ))}
                </CartList>
              </CartListContainer>
              <SummaryOrderContainer>
                <h3>Resumo do pedido</h3>
                <TotalSummary isBold={false}>
                  <p>Subtotal de produtos</p>
                  <span>{totalCart}</span>
                </TotalSummary>
                <TotalSummary isBold={false}>
                  <p>Entrega</p>
                  <span>R$ 40,00</span>
                </TotalSummary>
                <Divider/>
                <TotalSummary isBold={true}>
                  <p>Total</p>
                  <span>{totalCartWithDelivery}</span>
                </TotalSummary>
                <CheckoutButton
                  onClick={handleNavigate}
                >
                  FINALIZAR COMPRA
                </CheckoutButton>
              </SummaryOrderContainer>
            </Container>
          }
        </ContainerExtern>
    </DefaultLayout>
  )
}