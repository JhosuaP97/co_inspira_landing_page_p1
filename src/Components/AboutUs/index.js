import React from "react";
import Button from "Components/Button";
import SectionTitle from "Components/Title";
import { Colors } from "Styles/GlobalStyles";
import { ContentImages, ContentTitle, Description } from "./styles";

const AboutUs = () => {
  return (
    <>
      <ContentTitle>
        <SectionTitle
          title="Somos"
          textColor={Colors.black}
          headingColor={Colors.white}
        />
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolorum
          temporibus fuga autem alias, mollitia hic, sint eos minima placeat
          saepe unde distinctio nihil quasi qui laboriosam tempora? Quia,
          voluptas.
        </Description>
        <Button text="lorem" />
      </ContentTitle>

      <ContentImages>
        <img src="/img/aboutus.png" alt="" />
      </ContentImages>
    </>
  );
};

export default AboutUs;
