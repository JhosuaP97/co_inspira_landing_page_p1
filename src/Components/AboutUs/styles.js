import styled from "styled-components";

export const ContentImages = styled.div`
  grid-column: 6/-1;
  max-width: 558px;
  width: 100%;

  & > img {
    width: 90%;
  }

  @media only screen and (max-width: 992px) {
    grid-column: 3/-1;
    grid-row: 2;
  }
`;

export const ContentTitle = styled.div`
  grid-column: 2/6;
  text-align: left;
  margin: 1rem 0;

  @media only screen and (max-width: 992px) {
    grid-column: 3/12;
  }
`;

export const Description = styled.p`
  margin: 1rem 0;
`;
