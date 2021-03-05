import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../../ui/Header";
import Dashboard from "../User/Dashboard";
import UserDetails from "../User/UserDetails";
import UserEdit from "../User/UserEdit";

const UserRouter = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <Router>
      <Header toggle={toggle} setToggle={setToggle} bg={"bgBack"} />
      <Switch>
        <Route exact path="/users" component={Dashboard} />
        <Route exact path="/users/edit/:id" component={UserEdit} />
        <Route exact path="/users/details/:id" component={UserDetails} />
      </Switch>
    </Router>
  );
};

export default UserRouter;
