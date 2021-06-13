import React from "react";
import { Nav, Logo, List, Item } from "./styles";
const Navbar = () => {
  return (
    <>
      <Nav>
        <Logo>Logo</Logo>
        <List>
          <Item>Inicio</Item>
          <Item>¿Quiénes somos?</Item>
          <Item>Bootcamps</Item>
          <Item>Historias</Item>
          <Item>Financiación</Item>
        </List>
      </Nav>
    </>
  );
};

export default Navbar;
