import React from "react";

import classes from "./toolbar.module.css";
import NavigationItems from "../NavigationItems/navigationitems";
import Logo from "../../logo/logo";
import DrawToggle from "../Sidedrawer/drawtoggle";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawToggle clicked={props.toggleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.Desktop}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
