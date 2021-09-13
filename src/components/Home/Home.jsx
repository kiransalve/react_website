import React from "react";
import Common from "../Common";

import homeimg from "../images/home.svg";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your buisness with"
        visit="/service"
        button_text="Get Started"
        img={homeimg}
      />
    </>
  );
};

export default Home;
