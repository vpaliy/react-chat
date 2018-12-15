import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { connect } from "react-redux"
import ErrorMessage from "Messages/ErrorMessage"
import LoadingButton from "Buttons/LoadingButton"
import AuthFooter from "Footers/AuthFooter"
import { actions } from "@actions"
import { Header, Form, Input, Page, Logo } from "../auth"

class LoginForm extends React.Component {
  state = {
    isButtonEnabled: false,
    username: null,
    password: null
  }

  static propTypes = {
    errors: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  static defaultProps = {
    errors: null,
    isLoading: false,
    onSubmit: () => {}
  };

  onSubmit = event => {
    event.preventDefault();

    const { username, password } = this.state
    this.props.onSubmit(username, password);
  };

  onFieldChange = event => {
    const target = event.target
    const field = target.name
    const value = target.value
    const { username, password } = this.state

    this.setState({
      [field]: value,
    });
  };

  render() {
    const { isLoading, error } = this.props;
    return (
      <Page>
        <Logo />
        <Header>Sign In</Header>
        <Form onSubmit={this.onSubmit}>
          <Input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.onFieldChange}
            placeholder="Email or username"
          />
          <Input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onFieldChange}
            placeholder="Password"
          />
          <LoadingButton
            title="Log In"
            isLoading={isLoading}
            isEnabled={this.state.isButtonEnabled}
          />
        </Form>
        <ErrorMessage error={error} />
        <AuthFooter path="/forgot" text="Forgot Password?" />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (username, password) =>
    dispatch(actions.login(username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
