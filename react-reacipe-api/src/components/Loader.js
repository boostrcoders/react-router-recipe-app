import React from "react";
import loadersrc from "../assets/loading.gif";
import "../App.css";

const Loader = () => (
  <div className="loading-img">
    <img alt="Loader Icon" src={loadersrc} />
  </div>
);

export default Loader;
