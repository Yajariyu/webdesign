import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../../ui/Footer";
import Home from "../Home/Home";
import UserRouter from "./UserRouter";
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={UserRouter} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default AppRouter;
