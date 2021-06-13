import styled from "styled-components";
import { Colors } from "Styles/GlobalStyles";

export const Nav = styled.nav`
  background: ${Colors.white};
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  font-family: Oxygen;
`;

export const Logo = styled.div`
  margin-left: 10px;
  font-family: Oxygen;
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;
export const Item = styled.li`
  margin: 19px;
`;
