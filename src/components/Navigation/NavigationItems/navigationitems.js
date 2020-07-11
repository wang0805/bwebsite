import React from "react";

import NavigationItem from "./navigationitem";
import classes from "./navigationitems.module.css";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem exact link="/">
      Home
    </NavigationItem>
    <NavigationItem link="/form">About</NavigationItem>
  </ul>
);

export default navigationItems;
