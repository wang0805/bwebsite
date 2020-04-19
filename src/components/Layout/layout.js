import React, { Component, Fragment } from "react";

import Toolbar from "../../components/Navigation/Toolbar/toolbar";
import Sidedrawer from "../Navigation/Sidedrawer/sidedrawer";
import classes from "./layout.module.css";

class Layout extends Component {
  state = {
    showSidedrawer: false,
  };

  // for backdrop
  sideDrawerClosedHandler = () => {
    this.setState({ showSidedrawer: false });
  };

  sideDrawerToggle = () => {
    // do not use this -> this.setState({ showSidedrawer: !this.state.showSidedrawer });
    // clean way to display the state according to the prevState
    this.setState((prevState) => {
      return { showSidedrawer: !prevState.showSidedrawer };
    });
  };

  render() {
    return (
      <Fragment>
        <Toolbar toggleClicked={this.sideDrawerToggle} />
        <Sidedrawer
          open={this.state.showSidedrawer}
          close={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
