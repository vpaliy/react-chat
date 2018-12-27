import React from "react";
import { actions } from "@actions";
import { connect } from "react-redux";
import styled from "styled-components";
import { SmallIcon } from "Common";
import { strings } from "Utils";

const Form = styled.form`
  flex: none;
  display: flex;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  height: 3.6rem;
  width: 100%;

  > * {
    margin-right: 0.62rem;
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

class CreateMessageForm extends React.Component {
  state = { message: null };

  onSend = event => {
    event.preventDefault();
    const { message } = this.state;
    const { onSubmit } = this.props;

    onSubmit(message);

    this.setState({ message: null });
  };

  onType = event => {
    this.setState({
      message: event.target.value
    });
  };

  render() {
    return (
      <Form onSubmit={this.onSend}>
        <Input
          type="text"
          onChange={this.onType}
          value={this.state.message}
          placeholder={strings.forms.createMessage}
        />
        <Button>
          <SmallIcon>
            <use xlinkHref="index.svg#send" />
          </SmallIcon>
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: message => dispatch(actions.sendMessage(message))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateMessageForm);
