import React from "react";

import NavigationItem from "./navigationitem";
import classes from "./navigationitems.module.css";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>
      First
    </NavigationItem>
    <NavigationItem link="/">Second</NavigationItem>
  </ul>
);

export default navigationItems;
