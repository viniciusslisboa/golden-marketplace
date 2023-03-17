import styled from "styled-components";

interface CartProps {
  isCartOpen: boolean;
}

export const Container = styled.div<CartProps>`
  width: 400px;
  min-height: 100%;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background: #eee;
  overflow-y: auto;

  transform: ${({ isCartOpen }) => isCartOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: .3s ease-in-out;

`;

export const CartHeader = styled.div`
  padding: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #333;

  h1 {
      font-size: 24px;
      margin: 0;
      color: #fff;
    }
`;


