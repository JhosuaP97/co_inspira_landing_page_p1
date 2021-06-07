import styled from "styled-components";
import { Colors } from "Styles/GlobalStyles";

export const ButtonStyle = styled.button`
  text-align: center;
  max-width: 7.5rem;
  width: 100%;
  padding: 0.3438rem 0;
  background: ${({ fill }) => (fill ? Colors.primary : "none")};
  border: ${({ fill }) => (fill ? "none" : `1px solid ${Colors.black}`)};
  border-radius: 0.625rem;
  color: ${({ fill }) => (fill ? Colors.white : Colors.black)};
  cursor: pointer;
  font-size: 1.125rem;
`;
