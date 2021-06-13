import React from "react";
import {
  Container,
  Content,
  Title,
  Article,
  Info,
  ContainerBtn,
} from "./styles";
import Navbar from "Components/Navbar";
import Section from "Components/Section";
import Button from "Components/Button";

const Landing = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Section background="img/bg1110.png" responsiveBg="img/bg.png">
          <Content>
            <Article>
              <Title>
                "La educación es el arma más poderosa para cambiar el mundo"
              </Title>
            </Article>
            <Info>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
              vehicula quam. Vestibulum a orci quis libero blandit pretium at
              vehicula quam. Vestibulum a orci quis libero blandi.
              <ContainerBtn>
                <Button text="lorem" fill="true" />
                <Button text="lorem" />
              </ContainerBtn>
            </Info>
          </Content>
        </Section>
      </Container>
    </>
  );
};

export default Landing;
