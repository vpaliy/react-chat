import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { actions } from "@actions";
import { strings } from "Utils";
import createList from "./CreateLists";
import ContactUser from "Profiles/User";
import Room from "Profiles/Room";

const Wrapper = styled.div`
  flex: 1 1 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
`;

const PeopleList = createList(
  item => ContactUser({ user: item }),
  strings.labels.people
);
const RoomsList = createList(
  item => Room({ room: item }),
  strings.labels.rooms
);

class ContactsList extends React.Component {
  static propTypes = {
    people: PropTypes.array.isRequired,
    rooms: PropTypes.array.isRequired,
    fetchContacts: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired
  };

  static defaultProps = {
    people: [],
    rooms: [],
    fetchContacts: () => {},
    onRemove: () => {},
    onSelect: () => {}
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Wrapper>
        <RoomsList items={this.props.rooms} />
        <PeopleList items={this.props.people} />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.contacts.rooms,
  people: state.contacts.people
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(actions.fetchContacts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsList);
