import React from "react";
import PropTypes from "prop-types";
import ErrorMessage from "Messages/ErrorMessage";
import LoadingButton from "Buttons/LoadingButton";
import AuthFooter from "Footers/AuthFooter";
import { Header, Form, Input, Page, Logo } from "../auth";
import { connect } from "react-redux";
import { actions } from "@actions";
import { isEmail } from "Utils";

class RegisterForm extends React.Component {
  state = {
    email: null,
    password: null,
    username: null,
    repeatedPassword: null,
    isButtonEnabled: false
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

    const { email, username, password } = this.state;

    this.props.onSubmit(email, username, password);
  };

  onFormChange = event => {
    const target = event.target;
    const field = target.name;
    const value = target.value;
    const { email, username, password, repeatedPassword } = this.state;

    this.setState({
      [field]: value,
      isButtonEnabled: isEmail(email)
    });
  };

  render() {
    const { isLoading, error } = this.props;
    return (
      <Page>
        <Logo />
        <Header>Sign Up</Header>
        <Form onSubmit={this.onSubmit}>
          <Input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.onFormChange}
            placeholder="Email"
          />
          <Input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.onFormChange}
            placeholder="Username"
          />
          <Input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onFormChange}
            placeholder="Password"
          />
          <Input
            type="password"
            name="repeatedPassword"
            value={this.state.repeatedPassword}
            onChange={this.onFormChange}
            placeholder="Repeat Password"
          />
          <LoadingButton
            title="Sign Up"
            isLoading={isLoading}
            isEnabled={this.state.isButtonEnabled}
          />
        </Form>
        <ErrorMessage error={error} />
        <AuthFooter path="/login" text="Already have an account?" />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  error: state.auth.errors
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (email, username, password) =>
    dispatch(actions.register(email, username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);
