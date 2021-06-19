import React from "react";
import Button from "Components/Button";
import SectionTitle from "Components/Title";
import { Colors } from "Styles/GlobalStyles";
import { ContentImages, ContentTitle, Description, Img } from "./styles";

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
        <div>
          <Img
            src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </div>
        <div>
          <Img
            src="https://images.pexels.com/photos/5996855/pexels-photo-5996855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </div>
        <div>
          <Img
            src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </div>
      </ContentImages>
    </>
  );
};

export default AboutUs;
