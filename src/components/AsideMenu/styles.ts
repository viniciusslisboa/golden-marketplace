import styled from "styled-components";

interface MenuContainerProps {
  isMenuOpen: boolean;
}

export const Container = styled.aside<MenuContainerProps>`
  width: 280px;
  min-height: 100%;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background: #eee;
  overflow-y: auto;

  transform: ${({ isMenuOpen }) => isMenuOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: .3s ease-in-out;

  .div-actions-menu {
    padding: 24px;

    .primary {
        width: 100%;
        padding: 16px;
        border-radius: 4px;
        border: none;
        background-color: #333;
        color: #fff;
        cursor: pointer;
    }
  }

  h1 {
    font-size: 32px;
    margin: 0;

    color: #fff;
  }
`;

export const MenuHeader = styled.div`
  padding: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #333;

  button {
    border: none;
    cursor: pointer;
  }
`;


