import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./Icons/CartIcon";
import { styled } from "styled-components";

export function CartControl() {
  const { value } = useLocalStorage('cart-items', []);
  
  const sumItems = value.reduce((acc: any, cur: { quantity: any; }) => acc + cur.quantity, 0);

  const CartCount = styled.span`
    border-radius: 100%;
    padding: 5px;
    background-color: var(--delete-color);
    color: white;
    margin-left: -10px;
    font-size: 12px;
  `
  const ContainerCart = styled.button`
    position: relative;
  `
  return (
    <ContainerCart>
      <CartIcon/>
      {value.length > 0 && <CartCount>{sumItems}</CartCount>}
    </ContainerCart>
  )
}