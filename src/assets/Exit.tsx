import exit from '../svg/exit.svg';
import { defaultStyle } from './styles/global';

interface ExitProps {
  onClick: () => void;
}

export function Exit({ onClick }: ExitProps) {
  return (
    <button type="button" onClick={onClick} style={defaultStyle}>
      <img src={exit} alt="exit" />
    </button>
  );
}