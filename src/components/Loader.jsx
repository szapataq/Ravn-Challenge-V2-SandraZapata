import React from "react";
import spinner from "../assets/icons/spinner.png";
import "../style/Loader.scss";

const Loader = () => {
  return (
    <div className="loading-indicator">
      <img className="loading" src={spinner} alt="spinner"></img>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
