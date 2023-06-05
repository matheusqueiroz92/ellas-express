import { ButtonAddIcon } from "./ButtonAddIcon";
import { useSingleProduct } from "@/hooks/useSingleProduct";

interface ButtonAddToCartProps {
  productId: string,
}

export function ButtonAddToCart({ productId }: ButtonAddToCartProps) {
  const { singleProduct } = useSingleProduct(productId);

  const addProductToCart = () => {
    let cartItems = localStorage.getItem('cart-items');
    if (cartItems) { // verifica se existe o cart-items no localStorage e executa o código
      let itemsArray = JSON.parse(cartItems);
      let findItemId = itemsArray.findIndex((item: { id: any; }) => item.id === productId); // procura o index do produto no carrinho que possui o mesmo id

      if (findItemId != -1) {  // se ja existir um id no carrinho, adiciona 1 na quantidade a cada clique
        itemsArray[findItemId].quantity += 1;
      } else { // se não encontrar, pega tudo que tá la dentro e adiciona o produto ao array e setando quantidade em 1
        itemsArray.push({...singleProduct, id: productId, quantity: 1 });
      }

      localStorage.setItem('cart-items', JSON.stringify(itemsArray)); // adiciona o array ao localStorage
    }
    
    else { // se não existir nada no localStorage, adiciona um array com o objeto do produto na chave cart-items
      localStorage.setItem('cart-items', JSON.stringify([
        { ...singleProduct, id: productId, quantity: 1}
      ]));
    }
  }
  
  return (
    <button
      type="button"
      onClick={addProductToCart}
    >
      <ButtonAddIcon />
    </button>
  )
}