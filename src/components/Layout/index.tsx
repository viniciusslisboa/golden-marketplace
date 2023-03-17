import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { MenuContext } from '../../context/MenuContext';
import { Footer } from '../Footer';

import { Header } from '../Header';
import { Overlay } from '../Overlay';
import { PitchBar } from '../PitchBar';
import { Products } from '../Products';
import { TopHeader } from '../TopHeader';
import { Container } from './styles';

export function Layout() {
  const { isMenuOpen, handleToggleMenuOpen } = useContext(MenuContext)
  const { isCartOpen, handleToggleCartOpen } = useContext(CartContext)

  return (
    <>
      <TopHeader />
      <Header onToggleMenuOpen={handleToggleMenuOpen} onToggleCartOpen={handleToggleCartOpen} />
      <PitchBar />
      <Products />
      <Footer />
      {isMenuOpen && (
        <Overlay />
      )}
      {isCartOpen && (
        <Overlay />
      )}
    </>
  );
}