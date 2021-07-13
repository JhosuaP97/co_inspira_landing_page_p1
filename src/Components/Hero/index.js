import React from "react";
import { Content, Title, Info, Text, ContainerBtn } from "./styles";
import Button from "Components/Button";
const Hero = () => {
  return (
    <Content>
      <Title>
        "La educación es el arma más poderosa para cambiar el mundo"
      </Title>

      <Info>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
          vehicula quam. Vestibulum a orci quis libero blandit pretium at
          vehicula quam. Vestibulum a orci quis libero blandi.
        </Text>

        <ContainerBtn>
          <Button text="lorem" fill="true" />
          <Button text="lorem" />
        </ContainerBtn>
      </Info>
    </Content>
  );
};

export default Hero;
