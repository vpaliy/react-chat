import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ProfileHeader from "Headers/UserHeader";
import RoomHeader from "Headers/RoomHeader";
import CreateMessageForm from "Inputs/CreateMessage";
import CreateChatForm from "Inputs/CreateChat";
import LoginForm from "LoginForm";
import RegisterForm from "RegisterForm";
import ForgotPasswordForm from "ForgotPasswordForm";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: hidden;
`;

const Aside = styled.aside`
  flex: none;
  width: 320px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  background: #fcfcfc;
  z-index: 2;
  transform: rotateY(360deg);
  overflow: hidden;
`;

const Side = styled.div`
  flex: 1 1 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  :not(.dragging) > input[type="file"] {
    transform: translate(100%);
  }
`;

const Row = styled.div`
  flex: 1 1 100%;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Column = styled.div`
  flex: 1 1 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const Section = styled.div`
  flex: 1 1 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const AuthPage = () => (
  <Switch>
    <Route exact path="/" component={LoginForm} />
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/register" component={RegisterForm} />
    <Route exact path="/forgot" component={ForgotPasswordForm} />
  </Switch>
);

const MainPage = () => (
  <Main>
    <Aside>
      <ProfileHeader />
      <CreateChatForm />
    </Aside>
    <Section>
      <RoomHeader />
      <Column>
        <CreateMessageForm />
      </Column>
    </Section>
  </Main>
);

const App = ({ token }) => (token ? <MainPage /> : <AuthPage />);

const mapStateToProps = state => ({
  token: state.auth.token
});

export default connect(mapStateToProps)(App);
