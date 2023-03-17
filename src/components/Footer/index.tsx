import { CopyRight } from '../../assets/Copyright';
import { Container } from './styles';

export function Footer() {
  return (
    <Container>
      <div className='copyright'>
        <CopyRight />
        <h3>
          2023 Golden. Todos os direitos reservados.
        </h3>
      </div>
      <span>Developed by Vinícius Soares Lisboa</span>
    </Container>
  );
}