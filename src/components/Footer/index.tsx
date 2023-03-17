import { CopyRight } from '../../assets/Copyright';
import { Container } from './styles';

export function Footer() {
  return (
    <Container>
      <span>Developed by Vinícius Soares Lisboa</span>
      <div className='copyright'>
        <CopyRight />
        <h3>
          2023 Golden. Todos os direitos reservados.
        </h3>
      </div>
    </Container>
  );
}