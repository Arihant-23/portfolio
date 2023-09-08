import React from "react";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p> 96, Village NewRoshan Pura,</p>
              <p> New Delhi -110043, Delhi</p>
            </div>
          </div>
          <h4>
            <div className="phone">
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91-8510953528
            </div>
          </h4>
          <h4>
            <div className="email">
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              shokeenarihant@gmail.com
            </div>
          </h4>
        </div>
        <div className="right">
          <h4>
            <div className="social">
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <FaTwitter
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <Link to="https://www.linkedin.com/in/arihant-shokeen-2b5304197/">
                <FaLinkedin
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </Link>
            </div>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
