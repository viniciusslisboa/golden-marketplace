import { useContext } from 'react';
import { Exit } from '../../assets/Exit';
import { MenuContext } from '../../context/MenuContext';
import { NavLinks } from '../NavLinks';
import { MenuContainer, MenuHeader } from './styles';


export function AsideMenu() {
  const { isMenuOpen, handleToggleMenuOpen } = useContext(MenuContext)

  return (
    <MenuContainer isMenuOpen={isMenuOpen}>
      <div className='div-aside'>
        <MenuHeader>
          <h1>Golden</h1>
          <Exit onClick={handleToggleMenuOpen} />
        </MenuHeader>

        <NavLinks />

        <button className='primary'>Entrar</button>
      </div>
    </MenuContainer>
  );
}
