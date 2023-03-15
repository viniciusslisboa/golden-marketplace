import styled from "styled-components";


export const Container = styled.nav`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    margin: 0 0 32px 16px;

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 18px;
      padding: 0;

      li > a {
        text-decoration: none;
        color: #333;

        font-size: 20px;
        text-decoration: underline;
      }
    }
  
`;