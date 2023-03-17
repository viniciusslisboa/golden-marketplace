import styled from "styled-components";

export const Container = styled.div`
  max-height: 100%;

  display: grid;
  place-items: center;
  place-content: center;
  gap: 12px;
  padding: 24px;

  margin-bottom: 148px;
  
  @media screen and (min-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
    
  }
  
  @media screen and (min-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
    
  }
  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
    
  }
  @media screen and (min-width: 1024px) {
    padding: 0 124px;
  }
  @media screen and (min-width: 1300px) {
    padding: 0 300px;
  }
  @media screen and (min-width: 1560px) {
    padding: 0 400px;
  }
`;

export const ProductItem = styled.div`
  width: 100%;

  .img { 
    padding: 64px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: #eee;
  }

  .infos {
    padding-left: 6px;

    h3 {
      font-size: 14.5px;
      font-weight: 600;
    }

    p {
      font-size: 14px;
      opacity: 0.7;
      margin: 4px 0;
    }
  }
`;