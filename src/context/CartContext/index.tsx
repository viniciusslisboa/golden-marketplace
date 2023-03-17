import { createContext, useState } from "react";

interface CartProps {
  isCartOpen: boolean;
  handleToggleCartOpen: () => void;
}


export const CartContext = createContext({} as CartProps)

export function CartProvider({ children }: any) {
  const [isCartOpen, setIsCartOpen] = useState(false)

  function handleToggleCartOpen() {
    setIsCartOpen(prevState => prevState === false ? true : false)
  }

  return (
    <CartContext.Provider value={{ isCartOpen, handleToggleCartOpen }}>
      {children}
    </CartContext.Provider>
  );
}