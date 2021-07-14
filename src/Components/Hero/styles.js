import styled from "styled-components";

export const Content = styled.div`
  grid-column: 6/12;
  margin: 1rem 0;

  @media only screen and (max-width: 992px) {
    grid-column: 2 /10;
  }
`;

export const Title = styled.h1`
  grid-column: 5/10;
  font-size: 2.4375rem;
  font-weight: 400;

  &::after {
    content: "Nelson Mandela (1918-2013)";
    padding: 0 1rem;
    font-size: 18px;
  }
  @media only screen and (max-width: 992px) {
    grid-column: 2 /-1;

    h1 {
      font-size: 19px;
    }
  }
`;

export const Info = styled.div`
  text-align: left;
  margin: 20px 0;
`;

export const Text = styled.p`
  margin: 0 0 30px;
`;

export const ContainerBtn = styled.div`
  grid-column: 5/7;
  display: flex;
  gap: 20px;
`;
