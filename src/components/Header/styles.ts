import styled, { keyframes } from 'styled-components';


export const Container = styled.header`
  max-width: 100%;

  padding: 24px;
  position: relative;

  display: flex;
  align-items:  center;
  justify-content: space-between;

  .div-nav-actions-mobile {
    @media screen and (min-width: 320px) and (max-width: 900px) {
      display: flex;
      justify-content: space-between;
      align-items: center;

      gap: 16px;
    }
    
    display: none;
  }

  .div-nav-actions-desktop {
    @media screen and (min-width: 901px) {
      display: flex;
      justify-content: space-between;
      align-items: center;

    }

    display: none;
  }

`;

export const Logo = styled.h1`
  font-size: 32px;
  margin: 0;
`;

