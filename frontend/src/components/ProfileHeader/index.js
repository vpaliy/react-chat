import React from 'react'
import style from './index.module.css'
import { connect } from 'react-redux'
import { actions } from '../'

class ProfileHeader extends React.Component {
  componentWillMount() {
    this.props.loadUser()
  }

  render() {
    const {
      avatarUrl,
      username
    } = this.props
    return (
      <header className={style.component}>
        <img src={avatarUrl} alt={username}/>
        <h3>{username}</h3>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  ...state.header.user
})

const mapDispatchToProps = dispatch => ({
  loadUser: () =>
    dispatch(actions.fetchUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileHeader)
