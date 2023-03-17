import styled from "styled-components";

export const Container = styled.div`
  padding: 4px 24px;

  display: flex;
  align-items: center;
  justify-content: end;

  height: 24px;
  background-color: #333;

  a {
    color: #fff;
  }
    

  @media screen and (max-width: 901px) {
    display: none;
    
  }


`;