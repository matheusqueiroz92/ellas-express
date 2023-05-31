import { ButtonAddIcon } from "./ButtonAddIcon";
// import { useCart } from "@/hooks/useCart";

export function ButtonAddToCart() {
  // const { quantity, setQuantity } = useCart();
  
  // const addProductToCart = () => {
  //   setQuantity(quantity + 1);
    
  // }
  
  return (
    <button
      type="button"
      // onClick={addProductToCart}
    >
      <ButtonAddIcon />
    </button>
  )
}