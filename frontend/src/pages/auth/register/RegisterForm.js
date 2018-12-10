import React from 'react'
import PropTypes from 'prop-types'
import ErrorMessage from '../ErrorMessage'
import LoadingButton from '../LoadingButton'
import AuthFooter from '../AuthFooter'
import { connect } from 'react-redux'
import { actions } from '../'
import style from './index.module.css'

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
      <div className={style.component}>
        <div className={style.form}>
          <h2>Sign Up</h2>
          <form onSubmit={this.onSubmit}>
            <input-wrapper>
              <input
                type="text"
                ref={this.inputs.usernameRef}
                onChange={this.onFormChange}
                placeholder="Username"
              />
              <input
                type="email"
                ref={this.inputs.emailRef}
                onChange={this.onFormChange}
                placeholder="Email"
              />
              <input
                type="password"
                ref={this.inputs.passwordRef}
                onChange={this.onFormChange}
                placeholder="Password"
              />
              <input
                type="password"
                ref={this.inputs.repeatedPasswordRef}
                onChange={this.onFormChange}
                placeholder="Repeat Password"
              />
              <LoadingButton
                title="Sign Up"
                isLoading={isLoading}
                isEnabled={this.state.isButtonEnabled}
              />
            </input-wrapper>
          </form>
          <ErrorMessage error={error} />
          <AuthFooter
            path="/login"
            text="Already have an account?"
           />
        </div>
      </div>
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
