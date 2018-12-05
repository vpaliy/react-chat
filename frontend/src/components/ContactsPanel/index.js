import React from 'react'
import RoomsList from '../RoomsList'
import PeopleList from '../PeopleList'
import CustomScroll from 'react-custom-scroll'
import { actions } from '../'
import { connect } from 'react-redux'
import style from './index.module.css'

class ContactsPanel extends React.Component {
  componentWillMount() {
    this.props.loadContacts()
  }

  render() {
    const {
      rooms,
      people,
      onRemove,
      onSelect
    } = this.props
    return (
      <div className={style.component}>
          <RoomsList
            rooms={rooms}
            onRemove={onRemove}
            onSelect={onSelect}
          />
          <PeopleList
            people={people}
            onRemove={onRemove}
            onSelect={onSelect}
          />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  people: state.contacts.people,
  rooms: state.contacts.rooms
})

const mapDispatchToProps = dispatch => ({
  loadContacts: () =>
    dispatch(actions.fetchContacts()),
  onRemove: id =>
    dispatch({}),
  onSelect: id =>
    dispatch(actions.getChat(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsPanel)
