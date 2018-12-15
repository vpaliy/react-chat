import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ErrorMessage from "Messages/ErrorMessage";
import LoadingButton from "Buttons/LoadingButton";
import AuthFooter from "Footers/AuthFooter";
import { actions } from "@actions";
import { Header, Form, Input, Page, Logo } from "../auth";

class ForgotPasswordForm extends React.Component {
  state = {
    isButtonEnabled: false,
    username: null
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
    const { username } = this.state;
    const { onSubmit } = this.props;

    onSubmit(username);
  };

  onEmailChange = event => {
    this.setState({
      isButtonEnabled: event.target.value,
      username: event.target.value
    });
  };

  render() {
    return (
      <Page>
        <Logo />
        <Header>Forgot password?</Header>
        <Form onSubmit={this.onSubmit}>
          <Input
            type="text"
            value={this.state.username}
            onChange={this.onEmailChange}
            placeholder="Email or username"
          />
          <LoadingButton
            title="Submit"
            isLoading={this.props.isLoading}
            isEnabled={this.state.isButtonEnabled}
          />
        </Form>
        <ErrorMessage error={this.props.error} />
        <AuthFooter path="/login" text="Nope, remember it" />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  error: state.auth.errors
});

const mapDispatchToProps = dispatch => ({
  onSubmit: username => {
    dispatch(actions.forgotPassword(username));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordForm);
