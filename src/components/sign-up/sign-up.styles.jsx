import styled from "styled-components";

export const SignUpContainer = styled.div`
  min-width: 380px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width:455px){
    min-width:250px;
  }
`;

export const TitleContainer = styled.h2`
  margin: 10px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
