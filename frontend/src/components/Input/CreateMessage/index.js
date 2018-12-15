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
      <Form onSubmit={this.onSend} >
        <input
          ref={this.messageInput}
          type="text"
          placeholder="Message..." />
        <Button>
          <SmallIcon>
            <use xlinkHref="index.svg#send" />
          </SmallIcon>
        </Button>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: message =>
    dispatch(actions.sendMessage(message))
})

export default connect(
  null,
  mapDispatchToProps
)(CreateMessageForm)
