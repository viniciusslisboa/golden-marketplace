import { Container, Logo } from "./styles";

import { AsideMenu } from "../AsideMenu";
import { Menu } from "../../assets/Menu";
import { Cart } from "../../assets/Cart";
import { NavLinks } from "../NavLinks";
import { DesktopSearch, MobileSearch } from "../Search";
import { CartMenu } from "../CartMenu";

interface HeaderProps {
  onToggleMenuOpen: () => void;
  onToggleCartOpen: () => void;
}

export function Header({ onToggleMenuOpen, onToggleCartOpen }: HeaderProps) {

  return (
    <>
      <Container>
        <Logo>Golden</Logo>
        <div className="div-nav-actions-mobile">
          <Cart onClick={onToggleCartOpen} />
          <Menu
            onClick={onToggleMenuOpen}
            visible={true}
          />
        </div>
        <div className="div-nav-actions-desktop">
          <NavLinks direction="row" />
          <DesktopSearch />
          <Cart onClick={onToggleCartOpen} />
        </div>
      </Container>

      <MobileSearch />
      <AsideMenu />
      <CartMenu />
    </>
  );
}
