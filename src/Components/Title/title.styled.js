import styled from "styled-components";

export const TitleWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

export const TitleStyle = styled.h1`
  color: ${({ textColor }) => (textColor ? textColor : "#212121")};
  font-size: 3rem;

  &:after {
    position: absolute;
    content: "";
    background-color: ${({ headingColor }) =>
      headingColor ? headingColor : "#212121"};
    width: 100%;
    height: 1rem;
    left: 0;
    bottom: 0;
    z-index: -1;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    font-size: 2rem;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    font-size: 3rem;
  }
`;
