import React from "react";
import Footer from "../components/Footer/Footer";
import From from "../components/Form/From";
import ContactHeroimg from "../components/Heroimg/ContactHeroimg/ContactHeroimg";
import Navber from "../components/Navber/Navber";

const Contact = () => {
  return (
    <div>
      <Navber></Navber>
      <ContactHeroimg></ContactHeroimg>
      <From></From>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
