import React from 'react'
import { actions } from '@actions'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { SmallIcon } from 'Common'

const Form = styled.form`
  flex: none;
  display: flex;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  height: 3.6rem;
  display: flex;
  width: 100%;

  > * {
    margin-right: 0.62rem;
  }
`

const Button = styled.button`
  position: relative;
  border: 0;
  background: #fff;
  padding: 0;
`

class CreateChat extends React.Component {
  messageInput = React.createRef()

  onCreate = event => {
    event.preventDefault()

    const input = this.messageInput.current
    const { createRoom } = this.props

    createRoom(input.value)
  }

  render() {
    return (
      <Form onSubmit={this.onCreate} >
        <input
          ref={this.messageInput}
          type="text"
          placeholder="Create Room" />
        <Button>
          <SmallIcon>
            <use xlinkHref="index.svg#add" />
          </SmallIcon>
        </Button>
      </Form>
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
)(CreateChat)
