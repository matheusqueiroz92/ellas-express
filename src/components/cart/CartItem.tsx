import { ProductInCart } from "@/types/ProductType";
import { formatPrice } from "@/utils/FormatPrice";
import { ChangeEvent } from "react";
import { styled } from "styled-components";
import { DeleteIcon } from "../Icons/DeleteIcon";

interface CartItemProps {
  product: ProductInCart,
  handleUpdateQty(id: string, quantity: number): void,
  handleDelete(id: string): void,
}

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: white;

  @media (min-width: ${props => props.theme.desktopBreakPoint}) {
    height: 210px;
    width: 736px;
  }

  img {
    max-height: 100%;
    max-width: 100%;
    width: 256px;
    border-radius: 8px 0 0 8px;

    @media (min-width: ${props => props.theme.desktopBreakPoint}) {
      max-height: 100%;
      max-width: 100%;
      width: 256px;
      border-radius: 8px 0 0 8px;
    }
  }

  > div {
    padding: 16px 24px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;

    p {
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      text-align: left;
      max-height: 50%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    button {
      border: none;
      background: transparent;
      cursor: pointer;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      span {
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        color: var(--shapes-dark)
      }
    }
  }
`

const SelectQuantity = styled.select`
  padding: 8px;
  border: 1.5px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--bg-secondary);
  color: var(--text-dark);
  font-size: 16px;
  font-weight: 400;
`

export function CartItem({ product, handleUpdateQty, handleDelete }: CartItemProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    handleUpdateQty(product.id, Number(event.target.value));
  }
  
  return (
    <Item>
      <img src={product.image_url} alt={product.name}/>
      <div>
        <div>
          <h4>{product.name}</h4>
          <button
            aria-label="deletar"
            onClick={() => handleDelete(product.id)}
          >
            <DeleteIcon/>
          </button>
        </div>
        <p>{product.description}</p>
        <div>
          <SelectQuantity value={product.quantity} onChange={handleChange}>
            <option value={1}>{1}</option>
            <option value={2}>{2}</option>
            <option value={3}>{3}</option>
            <option value={4}>{4}</option>
            <option value={5}>{5}</option>
            <option value={6}>{6}</option>
            <option value={7}>{7}</option>
            <option value={8}>{8}</option>
            <option value={9}>{9}</option>
            <option value={10}>{10}</option>
          </SelectQuantity>
          <span>{formatPrice(product.price_in_cents)}</span>
        </div>
      </div>
    </Item>
  )
}