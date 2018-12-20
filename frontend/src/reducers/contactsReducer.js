const initialState = {
  people: [],
  rooms: [],
  isLoading: true
};

const pushItem = (state, action, newItem) => {
  const items = state[action.key].slice();
  items.splice(action.index, 0, newItem);
  return {
    ...state,
    [action.key]: items
  };
};

const fetchContacts = (state = initialState, action) => {
  switch (action.type) {
    case "contacts-start":
      return { ...state, isLoading: true };
    case "contacts-finish":
      return {
        ...state,
        isLoading: false,
        rooms: action.rooms,
        people: action.people
      };
    case "delete-user-start":
      return {
        ...state,
        people: state.people.filter(user => user.id !== action.user.id)
      };
    case "select-chat":
      return {
        ...state,
        people: state.people.map(user => ({
          ...user,
          active: user.id === action.id
        })),
        rooms: state.rooms.map(room => ({
          ...room,
          active: room.id === action.id
        }))
      };
    case "create-room":
      const rooms = state.rooms.slice();
      rooms.push(action.room);
      return { ...state, rooms };
    case "delete-room-start":
      return {
        ...state,
        rooms: state.rooms.filter(room => room.id !== action.room.id)
      };
    case "delete-room-failed":
      action.key = "rooms";
      return pushItem(state, action, action.room);
    case "delete-user-failed":
      action.key = "people";
      return pushItem(state, action, action.user);
    default:
      return state;
  }
};

export default fetchContacts;
