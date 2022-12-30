import React from "react";
import Footer from "../components/Footer/Footer";
import ProjectHeroimg from "../components/Heroimg/ProjectHeroimg/ProjectHeroimg";
import Navber from "../components/Navber/Navber";
import PricingCards from "../components/PricingCards/PricingCards";
import WorkCards from "../components/WorkCards/WorkCards";

const Project = () => {
  return (
    <div>
      <Navber></Navber>
      <ProjectHeroimg></ProjectHeroimg>
      <WorkCards></WorkCards>
      <PricingCards></PricingCards>
      <Footer></Footer>
    </div>
  );
};

export default Project;
