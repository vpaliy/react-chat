import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { actions } from "@actions";
import { connect } from "react-redux";
import ProfileHeader from "Headers/UserHeader";
import RoomHeader from "Headers/RoomHeader";
import CreateMessageForm from "Inputs/CreateMessage";
import CreateChatForm from "Inputs/CreateChat";
import RoomsList from "Lists/RoomsList";
import PeopleList from "Lists/PeopleList";

const Main = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: hidden;
`;

const Aside = styled.aside`
  flex: none;
  width: 320px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  background: #fcfcfc;
  z-index: 2;
  transform: rotateY(360deg);
  overflow: hidden;
`;

const Side = styled.div`
  flex: 1 1 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  :not(.dragging) > input[type="file"] {
    transform: translate(100%);
  }
`;

const Row = styled.div`
  flex: 1 1 100%;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Column = styled.div`
  flex: 1 1 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const Section = styled.div`
  flex: 1 1 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

class ChatPage extends React.Component {
  static propTypes = {
    createRoom: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    fetchContacts: PropTypes.func.isRequired
  };

  static defaultProps = {
    people: [],
    rooms: [],
    fetchContacts: () => {},
    createRoom: () => {},
    sendMessage: () => {}
  };

  componentWillMount() {
    const { fetchContacts } = this.props;
    fetchContacts();
  }

  render() {
    return (
      <Main>
        <Aside>
          <ProfileHeader />
          <RoomsList rooms={this.props.rooms} />
          <PeopleList people={this.props.people} />
          <CreateChatForm />
        </Aside>
        <Section>
          <RoomHeader />
          <Column>
            <CreateMessageForm />
          </Column>
        </Section>
      </Main>
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
)(ChatPage);
