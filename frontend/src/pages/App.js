import React from "react"
import { Route, Switch } from "react-router-dom"
import { connect } from "react-redux"
import ProfileHeader from "Headers/UserHeader"
import RoomHeader from "Headers/RoomHeader"
import CreateMessageForm from "Inputs/CreateMessage"
import CreateChatForm from "Inputs/CreateChat"
import LoginForm from "LoginForm"
import RegisterForm from "RegisterForm"
import ForgotPasswordForm from "ForgotPasswordForm"

const AuthPage = () => (
  <Switch>
    <Route exact path="/" component={LoginForm} />
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/register" component={RegisterForm} />
    <Route exact path="/forgot" component={ForgotPasswordForm} />
  </Switch>
);

const MainPage = () => (
  <main>
    <aside>
      <ProfileHeader />
      <CreateChatForm />
    </aside>
    <section>
      <RoomHeader />
      <col->
        <CreateMessageForm />
      </col->
    </section>
  </main>
);

const App = ({ token }) => (token ? <MainPage /> : <AuthPage />);

const mapStateToProps = state => ({
  token: state.auth.token
});

export default connect(mapStateToProps)(App);
