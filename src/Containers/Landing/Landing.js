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
import AboutUs from "Components/AboutUs";
import Hero from "Components/Hero";

const Landing = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Section background="img/bg1110.png" responsiveBg="img/bg.png">
          <Hero />
        </Section>
        <Section>
          <AboutUs />
        </Section>
      </Container>
    </>
  );
};

export default Landing;
