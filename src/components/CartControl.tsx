import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./Icons/CartIcon";
import { styled } from "styled-components";

export function CartControl() {
  const { value } = useLocalStorage('cart-items', []);
  const sumItems = value.reduce((acc: any, cur: { quantity: any; }) => acc + cur.quantity, 0);

  const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 0 5px;
    background-color: var(--delete-color);
    color: white;
    margin-left: -10px;
    font-size: 10px;
  `
  const ContainerCart = styled.div`
    position: relative;

  `
  return (
    <ContainerCart>
      <CartIcon/>
      {value.length > 0 && <CartCount>{sumItems}</CartCount>}
    </ContainerCart>
  )
}