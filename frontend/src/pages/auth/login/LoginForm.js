import React from 'react'
import PropTypes from 'prop-types'
import ErrorMessage from '../ErrorMessage'
import LoadingButton from '../LoadingButton'
import AuthFooter from '../AuthFooter'
import Lottie from 'react-lottie'
import style from './index.module.css'
import { actions } from '../';
import { connect } from 'react-redux'

class Logo extends React.Component {
  defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: require('./light_bulb_.json'),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  render() {
    return (
      <Lottie
        options={this.defaultOptions}
        height={200}
        width={200}
      />
    )
  }
}

class LoginForm extends React.Component {
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

  usernameRef = React.createRef();
  passwordRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();

    const username = this.usernameRef.current;
    const password = this.passwordRef.current;

    this.props.onSubmit(
      username.value,
      password.value
    );
  }

  onEmailChange = event => {
    this.setState({
      isButtonEnabled: event.target.value
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
          <Logo />
          <h2>Sign In</h2>
          <form onSubmit={this.onSubmit}>
            <input-wrapper>
              <input
                type="text"
                ref={this.usernameRef}
                onChange={this.onEmailChange}
                placeholder="Email or username"
              />
              <input
                type="password"
                ref={this.passwordRef}
                placeholder="Password"
              />
              <LoadingButton
                title="Log In"
                isLoading={isLoading}
                isEnabled={this.state.isButtonEnabled} />
            </input-wrapper>
          </form>
          <ErrorMessage error={error} />
          <AuthFooter
            path="/forgot"
            text="Forgot Password?"
           />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  error: state.auth.errors
})

const mapDispatchToProps = dispatch => ({
  onSubmit: (username, password) => {
    dispatch(actions.login(username, password))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)
