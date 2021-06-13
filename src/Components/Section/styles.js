import styled from "styled-components";

export const SectionGrid = styled.div`
  display: grid;
  width: 100%;
  font-family: Oxygen;
  font-weight: 400;
  padding: 0 0 200px 0;
  background: ${({ background }) =>
    background !== "" && `url(${background}) no-repeat`};
  grid-template-columns: repeat(12, 1fr);

  @media only screen and (max-width: 992px) {
    width: 100%;
    height: 100vh;
    background: ${({ responsiveBg }) =>
      responsiveBg !== "" && `url(${responsiveBg}) no-repeat`};
    grid-template-columns: repeat(12, 1fr);
  }
`;
