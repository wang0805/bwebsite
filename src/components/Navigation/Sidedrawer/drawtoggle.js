import React from "react";
import classes from "./drawtoggle.module.css";

const drawToggle = (props) => (
  <div className={classes.Toggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawToggle;
