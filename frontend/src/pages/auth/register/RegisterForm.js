import React from "react";
import PropTypes from "prop-types";
import ErrorMessage from "Messages/ErrorMessage";
import LoadingButton from "Buttons/LoadingButton";
import AuthFooter from "Footers/AuthFooter";
import { Header, Form, Input, Page, Logo } from "../auth";
import { connect } from "react-redux";
import { actions } from "@actions";
import { isEmail, strings } from "Utils";

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

    const { onSubmit } = this.props;
    const { email, username, password } = this.state;

    onSubmit(email, username, password);
  };

  onFormChange = event => {
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
    return (
      <Page>
        <Logo />
        <Header>{strings.labels.signUp}</Header>
        <Form onSubmit={this.onSubmit}>
          <Input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.onFormChange}
            placeholder={strings.forms.email}
          />
          <Input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.onFormChange}
            placeholder={strings.forms.username}
          />
          <Input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onFormChange}
            placeholder={strings.forms.password}
          />
          <Input
            type="password"
            name="repeatedPassword"
            value={this.state.repeatedPassword}
            onChange={this.onFormChange}
            placeholder={strings.forms.repeatPassword}
          />
          <LoadingButton
            title={strings.labels.signUp}
            isLoading={this.props.isLoading}
            isEnabled={this.state.isButtonEnabled}
          />
        </Form>
        <ErrorMessage error={this.props.error} />
        <AuthFooter path="/login" text={strings.labels.alreadyRegistered} />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (email, username, password) =>
    dispatch(actions.register(email, username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);
