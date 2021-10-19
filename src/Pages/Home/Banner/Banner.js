import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="parallax ">
      <div className="card shadow-lg p-3 mb-5 pt-5 rounded mx-auto">
        <h1 className="">Best Medical & Healthcare Service For Your Family</h1>
        <h6 className="p-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h6>
        <button className="btn btn-danger mx-auto mb-5">Contact Us</button>
      </div>
    </div>
  );
};

export default Banner;
