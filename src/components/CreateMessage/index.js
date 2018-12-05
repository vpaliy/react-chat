import React from 'react'
import { actions } from '../'
import { connect } from 'react-redux'
import style from './index.module.css'

class CreateMessageForm extends React.Component {
  messageInput = React.createRef()

  onSend = event => {
    event.preventDefault()
    const input = this.messageInput.current
    const { onSubmit } = this.props

    if (!input.value) {
      return;
    }

    onSubmit(input.value)
    input.value = null
  }

  render() {
    return (
      <form
        className={style.component}
        onSubmit={this.onSend} >
        <input
          ref={this.messageInput}
          type="text"
          placeholder="Message..." />
        <button
          type="submit">
          <svg>
            <use xlinkHref="index.svg#send" />
          </svg>
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: message =>
    dispatch(actions.sendMessage(message))
})

export default connect(
  () => {},
  mapDispatchToProps
)(CreateMessageForm)
