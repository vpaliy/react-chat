import React from 'react'
import { actions } from '../'
import { connect } from 'react-redux'
import style from './index.module.css'

class CreateChatFooter extends React.Component {
  messageInput = React.createRef()

  onCreate = event => {
    event.preventDefault()

    const input = this.messageInput.current
    const { createRoom } = this.props

    createRoom(input.value)
  }

  render() {
    return (
      <form
        className={style.component}
        onSubmit={this.onCreate} >
        <input
          ref={this.messageInput}
          type="text"
          placeholder="Create Room" />
        <button
          type="submit">
          <svg>
            <use xlinkHref="index.svg#add" />
          </svg>
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createRoom: roomName =>
    dispatch(actions.createRoom(roomName))
})

export default connect(
  null,
  mapDispatchToProps
)(CreateChatFooter)
