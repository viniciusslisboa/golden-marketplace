import { useState } from "react";
import { Container } from "./styles";

import { AsideMenu } from "../AsideMenu";
import { Menu } from "../../assets/Menu";
import { Cart } from "../../assets/Cart";

interface HeaderProps {
  onToggleMenuOpen: () => void;
}

export function Header({ onToggleMenuOpen }: HeaderProps) {
  return (
    <>
      <Container>
        <h1>Golden</h1>
        <div className="div-nav-actions">
          <Cart onClick={() => console.log('cart')} />
          <Menu
            onClick={onToggleMenuOpen}
          />
        </div>
      </Container>
      <AsideMenu />

    </>
  );
}
