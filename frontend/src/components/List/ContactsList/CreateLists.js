import React from "react";
import styled from "styled-components";
import ContactUser from "Profiles/User";

export const List = styled.div`
  margin: 0;
  -webkit-overflow-scrolling: touch;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: auto;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  flex-direction: column-reverse;
`;

export const Header = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  margin-left: 0.8rem;
  font-weight: bold;
  text-align: left;
  color: rgba(0, 0, 0, 0.58);
`;

const createList = (Component, title) => {
  return class extends React.Component {
    render() {
      const { items } = this.props;
      return items.length > 0 ? (
        <List>
          <Header>{title}</Header>
          <Wrapper>{items.map(item => Component(item))}</Wrapper>
        </List>
      ) : null;
    }
  };
};

export default createList;
