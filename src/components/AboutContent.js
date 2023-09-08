import React from "react";
import "./AboutContent.css";
import { Link } from "react-router-dom";

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
    </div>
  );
};

export default AboutContent;
