import React from "react";
import styled from "styled-components";
import Message from "Message/ChatMessage";

const List = styled.ul`
  flex: 1 1 100%;
  margin: 0;
  padding: 1rem;
  display: flex;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: auto;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  flex-direction: column-reverse;
`;

const MessageList = ({ messages = {}, user = {} }) => (
  <List>
    {messages.length > 0 ? (
      <Wrapper>
        {messages.reverse().map(message => Message({ user })(message))}
      </Wrapper>
    ) : null}
  </List>
);

export default MessageList;
