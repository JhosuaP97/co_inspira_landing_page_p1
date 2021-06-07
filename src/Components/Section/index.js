import React from "react";
import { SectionGrid } from "./styles";
const Section = ({ children }) => {
  return (
    <>
      <SectionGrid>{children}</SectionGrid>
    </>
  );
};

export default Section;
