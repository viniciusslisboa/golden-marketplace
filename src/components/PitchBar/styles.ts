import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 24px;

  .mySwiper {
    width: 100%;
    padding: 16px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    text-align: center;

    background-color: #333;
    color: #fff;

    .slide {
      display: flex;
      justify-content: center;
      align-items: center;

      gap: 14px;
    }

  }
`;