import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { actions } from '@actions';
import { connect } from 'react-redux'
import ErrorMessage from 'Messages/ErrorMessage'
import LoadingButton from 'Buttons/LoadingButton'
import AuthFooter from 'Footers/AuthFooter'
import { Header, Form, Input, Page, Logo } from '../auth'


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
    const { isLoading, error } = this.props;
    return (
      <Page>
        <Logo />
        <Header>Sign In</Header>
        <Form onSubmit={this.onSubmit}>
          <Input
            type="text"
            ref={this.usernameRef}
            onChange={this.onEmailChange}
            placeholder="Email or username"
          />
          <Input
            type="password"
            ref={this.passwordRef}
            placeholder="Password"
          />
          <LoadingButton
            title="Log In"
            isLoading={isLoading}
            isEnabled={this.state.isButtonEnabled} />
        </Form>
        <ErrorMessage error={error} />
        <AuthFooter
          path="/forgot"
          text="Forgot Password?"
        />
     </Page>
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
