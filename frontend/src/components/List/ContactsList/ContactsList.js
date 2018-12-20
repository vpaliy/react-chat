import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { actions } from "@actions";
import PeopleList from "./People";
import RoomsList from "./Rooms";

const Wrapper = styled.div`
  flex: 1 1 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
`;

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

  componentWillMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Wrapper>
        <RoomsList {...this.props} />
        <PeopleList {...this.props} />
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
