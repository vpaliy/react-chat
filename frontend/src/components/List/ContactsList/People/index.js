import React from "react";
import ContactUser from "Profiles/User";
import { List, Header, Wrapper } from "../styles";

const PeopleList = ({ people, onRemove, onSelect }) =>
  people.length > 0 ? (
    <List>
      <Header>People</Header>
      <Wrapper>
        {people.map(user => ContactUser({ user, onRemove, onSelect }))}
      </Wrapper>
    </List>
  ) : null;

export default PeopleList;
