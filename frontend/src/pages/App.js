import React from "react";
import { connect } from "react-redux";
import ChatPage from "ChatPage";
import AuthPage from "AuthPage";

const App = ({ token }) => (token ? <ChatPage /> : <AuthPage />);

const mapStateToProps = state => ({
  token: state.auth.token
});

export default connect(mapStateToProps)(App);
