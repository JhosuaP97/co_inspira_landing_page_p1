import React from "react";
import { ButtonStyle } from "./styles";
const Button = ({ text, fill }) => {
  return <ButtonStyle fill={fill}>{text}</ButtonStyle>;
};

export default Button;
