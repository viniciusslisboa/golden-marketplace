import menu from '../svg/menu.svg';
import { defaultStyle } from './styles/global';

interface MenuProps {
  onClick: () => void;
  visible: boolean;
}

export function Menu({ onClick, visible }: MenuProps) {
  return (
    <button type="button" onClick={onClick} style={{ display: visible ? "flex" : "none", ...defaultStyle }}>
      <img src={menu} alt="menu" />
    </button >
  );
}