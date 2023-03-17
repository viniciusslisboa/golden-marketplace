import { Container, Logo } from "./styles";

import { AsideMenu } from "../AsideMenu";
import { Menu } from "../../assets/Menu";
import { Cart } from "../../assets/Cart";
import { NavLinks } from "../NavLinks";
import { DesktopSearch, MobileSearch } from "../Search";

interface HeaderProps {
  onToggleMenuOpen: () => void;
}

export function Header({ onToggleMenuOpen }: HeaderProps) {

  return (
    <>
      <Container>
        <Logo>Golden</Logo>
        <div className="div-nav-actions-mobile">
          <Cart onClick={() => console.log('cart')} />
          <Menu
            onClick={onToggleMenuOpen}
            visible={true}
          />
        </div>
        <div className="div-nav-actions-desktop">
          <NavLinks direction="row" />
          <DesktopSearch />
          <Cart onClick={() => console.log('cart')} />
        </div>
      </Container>

      <MobileSearch />
      <AsideMenu />
    </>
  );
}
