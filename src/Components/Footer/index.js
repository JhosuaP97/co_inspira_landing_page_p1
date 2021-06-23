import React from "react";
// import Button from "Components/Button";
// import SectionTitle from "Components/Title";
// import { Colors } from "Styles/GlobalStyles";
import { Content, GeneralInformation, Description } from "./styles";

const Footer = () => {
  return (
    <Content>
      <GeneralInformation>
        <span className="logo">LOGO</span>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
          vehicula quam. Vestibulum a orci quis libero blandit pretium at Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Donec non vehicula
          quam. Vestibulum a orci quis libero blandit pretium at{" "}
        </Description>
        <div className="social-media">Redes sociales</div>
      </GeneralInformation>
    </Content>
  );
};

export default Footer;
