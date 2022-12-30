import React from "react";
import AboutContent from "../components/AboutContent/AboutContent";
import Footer from "../components/Footer/Footer";
import AboutHeroimg from "../components/Heroimg/AboutHeroimg/AboutHeroimg";
import Navber from "../components/Navber/Navber";

const About = () => {
  return (
    <div>
      <Navber></Navber>
      <AboutHeroimg></AboutHeroimg>
      <AboutContent></AboutContent>
      <Footer></Footer>
    </div>
  );
};

export default About;
