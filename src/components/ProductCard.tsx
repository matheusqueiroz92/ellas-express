import { formatPrice } from "@/utils/FormatPrice";
import { styled } from "styled-components";

interface ProductCardProps {
  image: string,
  title: string,
  price: number,
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 4px 4px;
  width: 256px;

  img {
    width: 256px;
    height: 300px
  }

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-secondary);
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shapes-dark);
  }

  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 8px 0px;

    > div {
    width: 228px;
    height: 1px;
    margin: 8px 0px;
    padding: 0px;
    background: var(--line-color);
    }
  }
  
`

export function ProductCard(props: ProductCardProps) {
  const priceFormated = formatPrice(props.price);

  return (
    <Card>
      <img src={props.image} alt={props.title} />
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>{priceFormated}</p>
      </div>
    </Card>
  )
}