import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { actions } from "@actions";
import { SmallIcon } from "Common";

const Form = styled.form`
  flex: none;
  display: flex;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  height: 3.6rem;
  width: 100%;

  > * {
    margin-right: 1rem;
  }
`;

const Button = styled.button`
  position: relative;
  border: 0;
  background: #fff;
  padding: 0;
`;

const Input = styled.input`
  flex: 1 1 100%;
  padding: 1rem;
  border: 0;
  font-size: 1rem;
  outline: none;
`;

class CreateChat extends React.Component {
  state = { roomName: null };

  onCreate = event => {
    event.preventDefault();

    const { roomName } = this.state;
    const { createRoom } = this.props;

    createRoom(roomName);

    this.setState({ roomName: null });
  };

  onType = event => {
    this.setState({
      roomName: event.target.value
    });
  };

  render() {
    return (
      <Form onSubmit={this.onCreate}>
        <Input
          type="text"
          value={this.state.roomName}
          onChange={this.onType}
          placeholder="Create Room..."
        />
        <Button onClick={this.onCreate}>
          <SmallIcon>
            <use xlinkHref="index.svg#add" />
          </SmallIcon>
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createRoom: roomName => dispatch(actions.createRoom(roomName))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateChat);
