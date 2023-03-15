import { useContext, useState } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { Footer } from '../Footer';

import { Header } from '../Header';
import { Overlay } from '../Overlay';
import { PitchBar } from '../PitchBar';
import { Products } from '../Products';
import { Search } from '../Search';

export function Layout() {
  const { isMenuOpen, handleToggleMenuOpen } = useContext(MenuContext)

  return (
    <>
      <Header onToggleMenuOpen={handleToggleMenuOpen} />
      <Search />
      <PitchBar />
      <Products />
      <Footer />
      {isMenuOpen && (
        <Overlay />
      )}
    </>
  );
}