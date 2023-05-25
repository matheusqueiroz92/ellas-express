import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./CartIcon";
import { styled } from "styled-components";

export function CartControl() {
  const { value } = useLocalStorage('cart-items');

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
      {value.length && <CartCount>{value.length}</CartCount>}
    </ContainerCart>
  )
}