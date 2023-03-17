import { Container } from "./styles";

interface NavLinksProps {
  direction: 'column' | 'row'
}


export function NavLinks({ direction }: NavLinksProps) {
  return (
    <Container direction={direction}>
      <ul>
        <li><a href="#">Sneakers</a></li>
        <li><a href="#">T-Shirts</a></li>
        <li><a href="#">Male</a></li>
        <li><a href="#">Female</a></li>
        <li><a href="#">Kids</a></li>
      </ul>
    </Container>
  );
}