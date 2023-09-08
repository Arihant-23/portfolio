import React from "react";
import "./HeroImage2.css";

const HeroImage2 = ({ heading, text }) => {
  return (
    <div className="hero-image">
      <div className="heading">
        <h1>{heading} </h1>
        <p>{text} </p>
      </div>
    </div>
  );
};

export default HeroImage2;
