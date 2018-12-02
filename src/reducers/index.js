import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import participants from './participantsReducer'
import contacts from './contactsReducer'
import chat from './chatReducer'
import header from './headerReducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  participants,
  header,
  contacts,
  chat
});
