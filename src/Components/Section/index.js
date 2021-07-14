import React from "react";
import PropTypes from "prop-types";
import { SectionGrid } from "./styles";

const Section = ({ background, responsiveBg, children }) => {
  return (
    <>
      <SectionGrid background={background} responsiveBg={responsiveBg}>
        {children}
      </SectionGrid>
    </>
  );
};

Section.propTypes = {
  background: PropTypes.string.isRequired,
  responsiveBg: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
export default Section;
