import { createContext, useState } from "react";

interface MenuProps {
  isMenuOpen: boolean;
  handleToggleMenuOpen: () => void;
}

export const MenuContext = createContext({} as MenuProps);


export function MenuProvider({ children }: any) {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleToggleMenuOpen() {
    setIsMenuOpen(prevState => prevState === true ? false : true)
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, handleToggleMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
}