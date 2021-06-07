import styled from "styled-components";

export const TitleWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

export const TitleStyle = styled.h1`
  color: ${({ textColor }) => (textColor ? textColor : "#212121")};

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
`;
