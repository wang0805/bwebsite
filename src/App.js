import React from "react";
import "./App.css";

import Layout from "./components/Layout/layout";
import Home from "./container/home";
import Form from "./container/form";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/form" component={Form} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
