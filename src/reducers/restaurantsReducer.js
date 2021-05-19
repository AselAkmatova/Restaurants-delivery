export default function restaurantsReducer(state, action) {
  switch (action.type) {
    case 'SET_RESTAURANTS':
      return {
        ...state,
        restaurants: action.payload,
        loading: false,
      };

    default:
      break;
  }
}
