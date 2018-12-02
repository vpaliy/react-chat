
const initialState = {
  header: {
    title: 'First chat ever',
    memberCount: 300,
    description: 'A chat that which objective is to test the app'
  },
  nextPage: null,
  periods: [{
    date: 'Monday, November 26th',
    messages:[{
      author: 'vpaliy',
      time: '8:30 PM',
      content: 'Could someone take a look at my MR?'
    }]
  }],
  isLoading: true
}

const chatPanel = (state=initialState, action) => {
  switch (action.type) {
    case 'fetch-chat-start':
      return {...state, isLoading:true }
    case 'fetch-chat-finish':
      return {
        ...action.payload,
        isLoading: false
      }
    case 'fetch-chat-periods':
      return {
        ...state,
        nextPage: action.nextPage,
        isLoading: false
      }
    default:
      return state
  }
  return state
}

export default chatPanel
