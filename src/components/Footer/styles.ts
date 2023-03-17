import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  position: fixed;
  left: 0;
  bottom: 0;

  background-color: #333;
  color: #fff;

  padding: 24px;

  .copyright {
    display: flex;
    align-items: center;
    gap: 4px;

    h3 {
      font-size: 16px;
    }
  }
 
`;