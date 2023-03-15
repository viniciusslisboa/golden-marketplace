import { createGlobalStyle } from "styled-components";

interface GlobalProps {
  isMenuOpen: boolean;
}

export default createGlobalStyle<GlobalProps>`
  html {
    -webkit-tap-highlight-color: transparent;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;

    overflow: ${({ isMenuOpen }) => isMenuOpen ? "hidden" : "unset"};
  }
`;