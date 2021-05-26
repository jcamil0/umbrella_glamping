import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import * as routes from "./constants/routes";
import Navigation from "./components/Navbar";
import LandingPage from "./Landing/Landing";
import HomePage from "./Home";
import SignIn from "./auth/SignIn";
import Register from "./auth/Register";
import PasswordForgetPage from "./auth/PasswordForget";
import Account from "./auth/Account";
import withAuthentication from "./auth/withAuthentication";

import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Route exact path={routes.LANDING} component={LandingPage} />
      <Route exact path={routes.SIGN_UP} component={SignIn} />
      <Route exact path={routes.SIGN_IN} component={Register} />
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={routes.HOME} component={HomePage} />
      <Route exact path={routes.ACCOUNT} component={Account} />
    </BrowserRouter>
  );
}
export default withAuthentication(App); //using HoC to handle session
