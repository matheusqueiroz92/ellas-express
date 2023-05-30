"use client"

import { ReactNode, createContext, useState } from "react";

export const CartContext = createContext({
  totalCart: 0,
  cart: []
});

interface ProviderProps {
  children: ReactNode;
}

export function CartContextProvider({children}: ProviderProps) {
  const [totalCart, setTotalCart] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider
      value={{
        totalCart,
        cart,
      }}>
      {children}
    </CartContext.Provider>
  )
}