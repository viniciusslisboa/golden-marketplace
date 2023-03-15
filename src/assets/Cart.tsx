import cart from '../svg/cart.svg';
import { defaultStyle } from './styles/global';

interface CartProps {
  onClick: () => void;
}

export function Cart({ onClick }: CartProps) {
  return (
    <button type="button" onClick={onClick} style={defaultStyle}>
      <img src={cart} alt="cart" />
    </button>
  );
}