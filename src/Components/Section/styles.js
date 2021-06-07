import styled from "styled-components";

export const SectionGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  font-family: Oxygen;
  font-weight: 400;
  background: url("img/bg1110.png") no-repeat;
  grid-template-columns: repeat(12, 1fr);

  @media only screen and (max-width: 992px) {
    width: 100%;
    height: 100vh;
    background: url("img/bg.png") no-repeat;
    grid-template-columns: repeat(12, 1fr);
  }
`;
