const initialState = {
  header: {
    title: "First chat ever",
    memberCount: 300,
    description: "A chat that which objective is to test the app"
  },
  nextPage: null,
  periods: [
    {
      date: "Monday, November 26th",
      messages: [
        {
          author: "vpaliy",
          time: "8:30 PM",
          content: "Could someone take a look at my MR?"
        }
      ]
    }
  ],
  isLoading: true
};

const user = {
  id: 1,
  avatarUrl: "https://www.gravatar.com/avatar/ggdfgfdg123gdf?d=identicon&s=46",
  username: "Mike",
  fullName: "Mike Salmon",
  active: false,
  presence: {
    state: "online"
  }
};

const chatPanel = (state = initialState, action) => {
  switch (action.type) {
    case "fetch-chat-start":
      return { ...state, isLoading: true };
    case "fetch-chat-finish":
      return {
        ...action.payload,
        isLoading: false
      };
    case "fetch-chat-periods":
      return {
        ...state,
        nextPage: action.nextPage,
        isLoading: false
      };
    case "send-message":
      const periods = state.periods.slice();
      const [first] = periods;
      first.messages.push({
        author: user,
        content: action.message
      });
      return { ...state, periods };
    default:
      return state;
  }
  return state;
};

export default chatPanel;
