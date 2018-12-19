import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Header = styled.div`
  border-bottom: 1px solid #e0e0e0;
  z-index: 1;
  flex: none;
  display: flex;
  align-items: center;
  padding: 0.62rem;
  height: 4.8rem;
`;

const Title = styled.h1`
  font-size: 1.38rem;
  color: rgba(0, 0, 0, 0.62);
  margin: auto;
`;

const RoomHeader = ({ title }) => (
  <Header>
    <Title>{title}</Title>
  </Header>
);

const mapStateToProps = state => ({
  ...state.chat.header
});

export default connect(mapStateToProps)(RoomHeader);
