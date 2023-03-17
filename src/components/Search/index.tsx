import { DesktopContainer, MobileContainer } from './styles';


export function DesktopSearch() {
  return (
    <DesktopContainer>
      <input type="text" className='input-search' placeholder="Buscar" />
    </DesktopContainer>
  );
}

export function MobileSearch() {
  return (
    <MobileContainer>
      <input type="text" className='input-search' placeholder="Buscar" />
    </MobileContainer>
  );
}