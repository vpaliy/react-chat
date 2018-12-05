
const initialState = {
  user: {},
  isLoading: false
}

const header = (state=initialState, action) => {
  switch (action.type) {
    case 'fetch-user-start':
      return {
        ...state,
        isLoading: true
      }
    case 'fetch-user-finished':
      return {
        user: action.payload,
        isLoading: false
      }
    default:
      return state
  }
}

export default  header
