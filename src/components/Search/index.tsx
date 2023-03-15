import { SearchIcon } from '../../assets/SearchIcon';
import { Container } from './styles';

export function Search() {
  return (
    <Container>
      <input type="text" className='input-search' placeholder="Buscar" />
    </Container>
  );
}