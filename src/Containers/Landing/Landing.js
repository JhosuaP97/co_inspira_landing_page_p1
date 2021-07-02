import React from "react";
import { Container } from "./styles";
import Navbar from "Components/Navbar";
import Section from "Components/Section";
import AboutUs from "Components/AboutUs";
import Hero from "Components/Hero";
import Bootcamps from "Components/BootCamps";

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
        <Section
          background="img/upcontainer.png"
          responsiveBg="img/upcontainer.png"
        >
          <Bootcamps />
        </Section>
      </Container>
    </>
  );
};

export default Landing;
