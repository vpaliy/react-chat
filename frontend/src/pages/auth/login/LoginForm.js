import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import ErrorMessage from "Messages/ErrorMessage";
import LoadingButton from "Buttons/LoadingButton";
import AuthFooter from "Footers/AuthFooter";
import { actions } from "@actions";
import { strings } from "Utils";
import { Header, Form, Input, Page, Logo } from "../auth";

class LoginForm extends React.Component {
  state = {
    isButtonEnabled: false,
    username: null,
    password: null
  };

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

    const { username, password } = this.state;
    this.props.onSubmit(username, password);
  };

  onFieldChange = event => {
    const target = event.target;
    const field = target.name;
    const value = target.value;

    this.setState({
      [field]: value,
      isButtonEnabled:
        Object.keys(this.state)
          .filter(key => !["isButtonEnabled", field].includes(key))
          .map(key => this.state[key])
          .every(v => v) && value
    });
  };

  render() {
    const { isLoading, error } = this.props;
    return (
      <Page>
        <Logo />
        <Header>{strings.labels.signIn}</Header>
        <Form onSubmit={this.onSubmit}>
          <Input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.onFieldChange}
            placeholder={strings.forms.usernameEmail}
          />
          <Input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onFieldChange}
            placeholder={strings.forms.password}
          />
          <LoadingButton
            title={strings.labels.signIn}
            isLoading={isLoading}
            isEnabled={this.state.isButtonEnabled}
          />
        </Form>
        <ErrorMessage error={error} />
        <AuthFooter path="/forgot" text={strings.labels.forgotPassword} />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (username, password) => dispatch(actions.login(username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
