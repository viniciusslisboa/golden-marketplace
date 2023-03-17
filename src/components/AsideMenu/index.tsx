import { useContext } from 'react';
import { Exit } from '../../assets/Exit';
import { MenuContext } from '../../context/MenuContext';
import { NavLinks } from '../NavLinks';
import { Container, MenuHeader } from './styles';


export function AsideMenu() {
  const { isMenuOpen, handleToggleMenuOpen } = useContext(MenuContext)

  return (
    <Container isMenuOpen={isMenuOpen}>
      <MenuHeader>
        <h1>Golden</h1>
        <Exit onClick={handleToggleMenuOpen} />
      </MenuHeader>

      <div className="div-actions-menu">
        <NavLinks direction='column' />

        <button className='primary'>Entrar</button>
      </div>
    </Container>
  );
}
