import React from "react";

import bpilogo from "../../assets/logo.png";
import classes from "./logo.module.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={bpilogo} alt="BPI" />
  </div>
);

export default logo;
