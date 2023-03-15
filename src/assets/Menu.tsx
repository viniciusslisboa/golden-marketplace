import menu from '../svg/menu.svg';
import { defaultStyle } from './styles/global';

interface MenuProps {
  onClick: () => void;
}

export function Menu({ onClick }: MenuProps) {
  return (
    <button type="button" onClick={onClick} style={defaultStyle}>
      <img src={menu} alt="menu" />
    </button>
  );
}