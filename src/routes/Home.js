import React from "react";
import Footer from "../components/Footer/Footer";
import Heroimg from "../components/Heroimg/Heroimg";
import Navber from "../components/Navber/Navber";
import WorkCards from "../components/WorkCards/WorkCards";

const Home = () => {
  return (
    <div>
      <Navber></Navber>
      <Heroimg></Heroimg>
      <WorkCards></WorkCards>
      <Footer></Footer>
    </div>
  );
};

export default Home;
