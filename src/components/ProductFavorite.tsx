import { formatPrice } from "@/utils/FormatPrice"
import { styled } from "styled-components"
import { DeleteIcon } from "./Icons/DeleteIcon"
import { ButtonDelete } from "./Buttons/ButtonDelete"

interface ProductFavoriteProps {
  image: string,
  title: string,
  price: number,
  description: string,
  id: string,
  handleDelete(id: string): void,
}

const ContainerProductFavorite = styled.div`
  display: flex;
  background-color: white;
  border-radius: 8px;
  position: relative;

  img {
    width: 160px;
    height: 180px;
    border-radius: 8px 0 0 8px;
  }

  > div {
    padding: 12px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    p {
      text-align: left;
    }

    span {
      font-weight: 600;
      font-size: 16px;
      line-height: 150%;
      color: var(--shapes-dark);
    }
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    position: absolute;
    right: 12px;
    top: 12px;
  }

`

export default function ProductFavorite(props: ProductFavoriteProps) {
  
  return (
    <ContainerProductFavorite>
      <img src={props.image} alt={props.title} />
      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <span>{formatPrice(props.price)}</span>
      </div>
      <ButtonDelete productId={props.id} handleDelete={props.handleDelete}/>
    </ContainerProductFavorite>
  )
}
