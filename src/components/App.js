import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "reactstrap";

import Navigation from "../components/Navigation";
import LandingPage from "../Landing/Landing";
import SignUpPage from "../auth/SignUp";
import SignInPage from "../auth/SignIn";
import PasswordForgetPage from "../auth/PasswordForget";
import HomePage from "../components/Home";
import AccountPage from "../auth/Account";
import Home from "../Home";
import * as routes from "../constants/routes";
import withAuthentication from "../auth/withAuthentication";

const App = () => (
  <BrowserRouter>
    <Container>
      <Navigation />
      <Route exact path={routes.LANDING} component={LandingPage} />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={routes.HOME} component={HomePage} />
      <Route exact path={routes.ACCOUNT} component={AccountPage} />
      <Route exact path="/hola" component={Home} />
    </Container>
  </BrowserRouter>
);

export default withAuthentication(App); //using HoC to handle session
