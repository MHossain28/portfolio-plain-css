import React from "react";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaMale,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>111 Housing Scitety</p>
              <p>Bangladesh</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +8801708677380
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              mahmudhossain919@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the Company</h4>
          <p>
            This is me Mahmud Hossain. I am a student. I'm junior WEB DEVELOPER.
            <p className="social">
              <FaFacebook
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <FaTwitter
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
