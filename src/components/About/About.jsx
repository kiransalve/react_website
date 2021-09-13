import React from "react";
import Common from "../Common";
import aboutimg from "../images/about.svg";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page of"
        visit="/contact"
        button_text="Contact Us"
        img={aboutimg}
      />
    </>
  );
};

export default About;
