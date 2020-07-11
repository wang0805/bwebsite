import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./navigationitem.module.css";

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    {/* <NavLink className={props.active ? classes.active : null} href={props.link}>
      {props.children}
    </NavLink> */}
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName={classes.active}
    >
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
