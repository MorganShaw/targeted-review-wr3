import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Auth from "./Components/Auth";
import Admin from './Components/Admin'

export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/dash" component={Dashboard} />
    <Route path='/admin' component={Admin} />
  </Switch>
);
