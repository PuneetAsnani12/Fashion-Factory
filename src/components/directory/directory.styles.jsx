import styled from "styled-components";

export const DirectoryMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 400px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;
