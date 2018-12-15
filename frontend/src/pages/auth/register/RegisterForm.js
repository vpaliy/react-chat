import React from 'react'
import PropTypes from 'prop-types'
import ErrorMessage from 'Messages/ErrorMessage'
import LoadingButton from 'Buttons/LoadingButton'
import AuthFooter from 'Footers/AuthFooter'
import { Header, Form, Input, Page, Logo } from '../auth'
import { connect } from 'react-redux'
import { actions } from '@actions'


class RegisterInputContainer {
  emailRef = React.createRef()
  usernameRef = React.createRef()
  passwordRef =  React.createRef()
  repeatedPasswordRef = React.createRef()

  get email() {
    return this.emailRef.current.value;
  }

  get username() {
    return this.usernameRef.current.value;
  }

  get password() {
    return this.passwordRef.current.value;
  }

  get repeatedPassword() {
    return this.repeatedPasswordRef.current.value;
  }
}


class RegisterForm extends React.Component {
  static emailTest = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;

  static propTypes = {
    errors: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  static defaultProps = {
    errors: null,
    isLoading: false,
    onSubmit: () => {}
  }

  state = {
    isButtonEnabled: false
  }

  inputs = new RegisterInputContainer();

  onSubmit = event => {
    event.preventDefault();

    const {
      email,
      username,
      password
    } = this.inputs

    this.props.onSubmit(email, username, password)
  }

  onFormChange = event => {
    const {
      email,
      username,
      password,
      repeatedPassword
    } = this.inputs

    const all = [
      email, username,
      password, repeatedPassword
    ];

    const areValid = !all.some(item => !item.trim());

    this.setState({
      isButtonEnabled: areValid
    })
 }

  render() {
    const {
      isLoading,
      error
    } = this.props;
    return (
      <Page>
        <Logo />
        <Header>Sign Up</Header>
        <Form onSubmit={this.onSubmit}>
          <Input
            type="text"
            ref={this.usernameRef}
            onChange={this.onFormChange}
            placeholder="Email or username"
          />
          <Input
            type="password"
            ref={this.passwordRef}
            onChange={this.onFormChange}
            placeholder="Password"
          />
          <Input
            type="password"
            ref={this.repeatedPasswordRef}
            onChange={this.onFormChange}
            placeholder="Repeat Password"
          />
          <LoadingButton
            title="Sign Up"
            isLoading={isLoading}
            isEnabled={this.state.isButtonEnabled} />
        </Form>
        <ErrorMessage error={error} />
        <AuthFooter
          path="/login"
          text="Already have an account?"
        />
     </Page>
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  error: state.auth.errors
})

const mapDispatchToProps = dispatch => ({
  onSubmit: (email, username, password) =>
    dispatch(actions.register(email, username, password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm)
