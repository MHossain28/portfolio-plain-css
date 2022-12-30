import React from "react";
import "./WorkCards.css";
import web1 from "../../assets/web-1.jpg";
import web2 from "../../assets/web-5.png";
import web3 from "../../assets/web-6.png";
import web4 from "../../assets/web-7.jpg";

import { NavLink } from "react-router-dom";
import "../PricingCards/PricingCards.css";

const WorkCards = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={web2} alt="image" />
          <h2 className="project-title">Ecommerce Website</h2>
          <div className="pro-deteils">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
              nulla, excepturi, quasi rem sunt corrupti nam necessitatibus
              quibusda.
            </p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">
                View
              </NavLink>
              <NavLink to="url.com" className="btn ">
                Source
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={web3} alt="image" />
          <h2 className="project-title">LMS/Course Website</h2>
          <div className="pro-deteils">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero
              doloribus blanditiis earum repellat optio quam, facere modi error.
            </p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">
                View
              </NavLink>
              <NavLink to="url.com" className="btn ">
                Source
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={web4} alt="image" />
          <h2 className="project-title">Ryom Ecommerce</h2>
          <div className="pro-deteils">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              veniam, ducimus culpa assumenda maxime libero excepturi veritatis
              repudiandae.
            </p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">
                View
              </NavLink>
              <NavLink to="url.com" className="btn ">
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCards;
