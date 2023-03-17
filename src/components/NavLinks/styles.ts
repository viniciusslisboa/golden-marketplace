import styled from "styled-components";

interface NavLinksProps {
  direction: 'column' | 'row'
}

export const Container = styled.nav<NavLinksProps>`

    display: flex;
    justify-content: space-between;
    align-items: left;
    margin: ${props => props.direction === "column" ? "0 0 32px 16px" : '0'};

    ul {
      list-style: none;
      display: flex;
      flex-direction: ${props => props.direction};
      gap: 18px;
      padding: 0;
      margin: 0;

      li > a {
        color: #333;

        font-size: ${props => props.direction === 'row' ? '14px' : '16px'};
      }
    }
  
`;