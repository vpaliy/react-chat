import React from 'react'
import PropTypes from 'prop-types'
import MessageList from '../MessageList'
import { connect } from 'react-redux'
import { actions } from '../'

class ChatPanel extends React.Component {
  componentWillMount() {
    this.props.onLoad()
  }

  render() {
    const {
      periods
    } = this.props
    return (
      <div className="h-100">
        <MessageList messages={periods[0].messages} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  periods: state.chat.periods
})

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(actions.fetchChat())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPanel)
