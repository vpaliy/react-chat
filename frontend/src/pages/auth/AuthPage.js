import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import LoginForm from "LoginForm";
import RegisterForm from "RegisterForm";
import ForgotPasswordForm from "ForgotPasswordForm";

const AuthPage = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/register" component={RegisterForm} />
    <Route exact path="/forgot" component={ForgotPasswordForm} />
  </Switch>
);

export default AuthPage;
