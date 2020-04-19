import React from "react";

import classes from "./navigationitem.module.css";

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <a className={props.active ? classes.active : null} href={props.link}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;
