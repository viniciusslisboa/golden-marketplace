import styled from "styled-components";


export const DesktopContainer = styled.div`
  @media screen and (min-width: 901px) {
      display: flex;
      justify-content: center;
      align-items: center;

      margin-left: 24px;
  }
  
  display: none;

  .input-search {
    width: 100%;

    padding: 12px;
    border-radius: 4px;
    border: none;
    outline: none;

    background: #ddd;
    color: #000;

    font-size: 14px;
    font-weight: 600;
  }

  
`;
export const MobileContainer = styled.div`
  @media screen and (min-width: 320px) and (max-width: 900px) {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0 24px 24px 24px;
  }

  display: none;

  .input-search {
    width: 100%;

    padding: 12px;
    border-radius: 4px;
    border: none;
    outline: none;

    background: #ddd;
    color: #000;

    font-size: 14px;
    font-weight: 600;
  }

  
`;