import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Header = styled.div`
  padding: 0.8rem;
  display: flex;
  align-items: center;
  flex: none;
  height: 4.8rem;
  border-bottom: 1px solid #e0e0e0;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin-left: 1rem;
  margin-top: 0.3rem;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.38);
`;

const Img = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 0.3rem;
  background: #e0e0e0;
`;

const ProfileHeader = ({ image, username }) => (
  <Header>
    <Img src={image} alt={username} />
    <Title>{username}</Title>
  </Header>
);

const mapStateToProps = state => ({
  ...state.auth.user
});

export default connect(mapStateToProps)(ProfileHeader);
