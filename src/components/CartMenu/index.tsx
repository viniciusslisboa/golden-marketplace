import { useContext } from 'react';
import { Exit } from '../../assets/Exit';
import { CartContext } from '../../context/CartContext';
import { Container, CartHeader } from './styles';

export function CartMenu() {
  const { isCartOpen, handleToggleCartOpen } = useContext(CartContext)

  return (
    <Container isCartOpen={isCartOpen}>
      <CartHeader>
        <h1>Seu Carrinho</h1>
        <Exit onClick={handleToggleCartOpen} />
      </CartHeader>
    </Container>
  );
}