import React from "react";

// Style
import { TitleWrapper, TitleStyle } from "./title.styled";

const SectionTitle = ({ title, textColor, headingColor }) => {
  return (
    <TitleWrapper>
      <TitleStyle textColor={textColor} headingColor={headingColor}>
        {title}
      </TitleStyle>
    </TitleWrapper>
  );
};

export default SectionTitle;
