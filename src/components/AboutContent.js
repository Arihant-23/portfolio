import React from "react";
import "./AboutContent.css";
import { Link } from "react-router-dom";
import conimg1 from "../assets/con.png";
import conimg2 from "../assets/project2.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I ?</h1>
        <p>
          I am a Software Developer done my Bachelors degree in Information
          Technology from Delhi Technological University. I am very much
          enthusiatic about doing new innovations and exploring new fields which
          makes me different from others.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      {/* <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={conimg1} alt="img" />
          </div>
          <div className="img-stack bottom">
            <img src={conimg2} alt="img" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutContent;
