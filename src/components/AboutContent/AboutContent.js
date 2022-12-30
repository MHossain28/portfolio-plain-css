import React from "react";
import { Link } from "react-router-dom";
import "./AboutContent.css";
import react1 from "../../assets/into.jpg";
import react2 from "../../assets/react-img.jpg";
import react3 from "../../assets/into-4.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm react font-end developer. I create responsive secure website for
          my clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={react2} alt="true" className="img top-img" />
          </div>
          <div className="img-stack bottom">
            <img src={react3} alt="true" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
