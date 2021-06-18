import styled from "styled-components";

export const ContentImages = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column: 5/-1;
  position: relative;

  & > div:first-of-type {
    grid-column: 2 / span 2;
    grid-row: 1 / span 2;
    z-index: 10;
  }

  & > div:nth-child(2) {
    grid-column: 4 / span 2;
    grid-row: 2 / span 2;
    z-index: 10;
    img {
      width: 14.375rem;
      height: 14.375rem;
    }
  }

  & > div:last-of-type {
    grid-column: 6 / span 2;
    grid-row: 1 / span 2;
    z-index: 10;
    img {
      width: 13.9375rem;
      height: 13.9375rem;
    }
  }

  &::before {
    position: absolute;
    top: -60px;
    right: 50px;
    content: "";
    width: 489px;
    height: 489px;
    border-radius: 50%;
    background-color: #aee1fe;
  }

  &::after {
    position: absolute;
    top: -20px;
    left: 50px;
    content: "";
    width: 385px;
    height: 385px;
    border-radius: 50%;
    background-color: #e2f4ff;
  }
`;

export const ContentTitle = styled.div`
  grid-column: 2/5;
  width: 300px;
  text-align: justify;
  margin: 1rem 0;
  position: relative;
`;

export const Img = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 1.25rem;
  object-fit: cover;
`;

export const Description = styled.p`
  margin: 1rem 0;
`;
