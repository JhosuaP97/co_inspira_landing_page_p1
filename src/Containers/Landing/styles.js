import styled from "styled-components";
import { Colors } from "Styles/GlobalStyles";

export const Container = styled.div`
  max-width: 1110px;
  width: 80%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid ${Colors.white};
`;

export const Content = styled.div`
  grid-column: 6/12;
  margin: 1rem 0;

  @media only screen and (max-width: 992px) {
    grid-column: 2 /10;
  }
`;

export const Article = styled.article`
  max-width: 659px;
  width: 100%;
`;

export const Title = styled.h1`
  grid-column: 5/10;
  font-size: 39px;
  font-weight: 400;

  &::after {
    content: "Nelson Mandela (1918-2013)";
    padding: 0 1rem;
    font-size: 18px;
  }
`;

export const Info = styled.div`
  grid-column: 5/10;
  max-width: 505px;
  text-align: justify;
  margin: 20px 0;
`;

export const ContainerBtn = styled.div`
  grid-column: 5/7;
  display: flex;
  margin: 36px 0;
  gap: 20px;
`;
