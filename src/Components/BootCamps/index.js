import React from "react";
import { Colors } from "Styles/GlobalStyles";
import SectionTitle from "Components/Title";
import { TitleContainer, Description, Content, CardsContainer } from "./styles";
import BootCard from "Components/BootCard";
import Button from "Components/Button";

const Bootcamps = () => {
  return (
    <Content>
      <TitleContainer>
        <SectionTitle
          title="Bootcamps 🏕️"
          textColor={Colors.black}
          headingColor={Colors.purple}
        />
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
          vehicula quam. Vestibulum a orci quis libero blandit pretium at non
          arcuorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
          vehicula quam. Vestibulum a orci quis libero blandit pretium at non
          arcu
        </Description>
      </TitleContainer>
      <CardsContainer>
        <BootCard
          img="/img/react.png"
          title="ReactJS"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non vehicula quam."
        />
        <BootCard
          img="/img/php.png"
          title="PHP"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non vehicula quam."
        />
        <BootCard
          img="/img/nodejs.png"
          title="NodeJS"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non vehicula quam."
        />
      </CardsContainer>
      <Button text="Ver más" />
    </Content>
  );
};

export default Bootcamps;
