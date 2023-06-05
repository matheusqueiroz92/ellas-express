import { useSingleProduct } from "@/hooks/useSingleProduct";
import { useEffect, useState } from "react";
import FavoriteFalse from "../Icons/FavoriteFalse";
import FavoriteTrue from "../Icons/FavoriteTrue";
import { styled } from "styled-components";

interface ButtonFavoriteProps {
  productId: string,
}

const BtnFavorite = styled.button`
  border: none;
  background: transparent;
  width: 20px;
  height: 20px;
  margin-left: 220px;
  margin-top: -32px;
  position: absolute;
`

export default function ButtonFavorite({ productId }: ButtonFavoriteProps) {
  const [colorButton, setColorButton] = useState(false);
  const { singleProduct } = useSingleProduct(productId);

  useEffect(() => {
    const listFavorites = localStorage.getItem('favorites-items');
    if (listFavorites) {
      const arrayFavorites = JSON.parse(listFavorites);
      const findFavorite = arrayFavorites.findIndex((item: {id: any;}) => item.id === productId);
      if (findFavorite != -1) setColorButton(true);
      else setColorButton(false);
    } else setColorButton(false);
  }, []);

  const setProductToFavorites = () => {
    setColorButton(prev => !prev);
    let favoritesItems = localStorage.getItem('favorites-items');
    if (favoritesItems) { // verifica se existe o favorites-items no localStorage e executa o código
      let itemsArray = JSON.parse(favoritesItems); // converte para array
      let findItemId = itemsArray.findIndex((item: {id: any;}) => item.id === productId); // procura o index do produto na lista de favoritos que possui o mesmo id

      if (findItemId != -1) {  // se ja existir um id na lista de favoritos, remove-o
        itemsArray.splice(findItemId, 1);
      } else { // se não encontrar, pega tudo que tá la dentro e insere o produto na lista de favoritos
        itemsArray.push({...singleProduct, id: productId});
      }

      localStorage.setItem('favorites-items', JSON.stringify(itemsArray)); // adiciona o array ao localStorage
    }

    else { // se não existir nada no localStorage, adiciona um array com o objeto do produto na chave cart-items
      localStorage.setItem('favorites-items', JSON.stringify([
        {...singleProduct, id: productId}
      ]));
    }
  }

  return (
    <BtnFavorite
      type="button"
      onClick={setProductToFavorites}
    >
      {colorButton &&
        <FavoriteTrue/>
      }
      {!colorButton &&
        <FavoriteFalse/>
      }
    </BtnFavorite>
  )
}