import React from "react";
import { Container } from "./styles";
import Navbar from "Components/Navbar";
import Section from "Components/Section";
import AboutUs from "Components/AboutUs";
import Hero from "Components/Hero";
import { BrowserRouter as Router } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Container>
        <Router>
          <Navbar />
        </Router>
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
