import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actions } from '@actions'
import ErrorMessage from 'Messages/ErrorMessage'
import LoadingButton from 'Buttons/LoadingButton'
import AuthFooter from 'Footers/AuthFooter'
import { Header, Form, Input, Page, Logo } from '../auth'

class ForgotPasswordForm extends React.Component {
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

  usernameRef = React.createRef()

  onSubmit = (event) => {
    event.preventDefault();

    const username = this.usernameRef.current;
    this.props.onSubmit(username.value);
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
      <Page>
        <Logo />
        <Header>Forgot password?</Header>
        <Form onSubmit={this.onSubmit}>
          <Input
            type="text"
            ref={this.usernameRef}
            onChange={this.onEmailChange}
            placeholder="Email or username"
          />
          <LoadingButton
            title="Submit"
            isLoading={isLoading}
            isEnabled={this.state.isButtonEnabled} />
        </Form>
        <ErrorMessage error={error} />
        <AuthFooter
          path="/login"
          text="Nope, remember it"
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
  onSubmit: (username) => {
    dispatch(actions.forgotPassword(username))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordForm)
