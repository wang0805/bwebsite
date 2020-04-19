import React, { Fragment } from "react";

import NavigationItems from "../NavigationItems/navigationitems";
import Logo from "../../logo/logo";
import classes from "./sidedrawer.module.css";
import Backdrop from "../../Backdrop/backdrop";

const sidedrawer = (props) => {
  let attachedClasses = [classes.Sidedrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.Sidedrawer, classes.Open];
  }
  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.close} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default sidedrawer;
