import React from 'react'
import PropTypes from 'prop-types'
import ErrorMessage from 'Messages/ErrorMessage'
import LoadingButton from 'Buttons/LoadingButton'
import AuthFooter from 'Footers/AuthFooter'
import { actions } from '@actions'
import { connect } from 'react-redux'
import style from './index.module.css'

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
      <div className={style.component}>
        <div className={style.form}>
          <h3>Forgot Password?</h3>
          <form onSubmit={this.onSubmit}>
            <input-wrapper>
              <input
                type="text"
                ref={this.usernameRef}
                onChange={this.onEmailChange}
                placeholder="Email or username"
              />
              <LoadingButton
                title="Submit"
                isLoading={isLoading}
                isEnabled={this.state.isButtonEnabled} />
            </input-wrapper>
          </form>
          <ErrorMessage error={error} />
          <AuthFooter
            path="/login"
            text="Back to Sign In?"
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
  onSubmit: (username) => {
    dispatch(actions.forgotPassword(username))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordForm)
