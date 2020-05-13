import styled from "styled-components";

export const SignInContainer = styled.div`
  min-width: 380px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  @media screen and (max-width: 455px) {
    min-width: 250px;
  }
`;

export const TitleContainer = styled.h2`
  margin: 10px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 455px) {
    flex-direction: column;
    button {
      margin-bottom: 10px;
    }
  }
`;
