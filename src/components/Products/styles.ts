import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  min-height: 100%;

  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, 50%);
  gap: 16px;
  padding: 24px;
`;

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 16px 0;


  .img {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: #eee;
  }

  .infos {
    width: 100%;
    padding-left: 14px;

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