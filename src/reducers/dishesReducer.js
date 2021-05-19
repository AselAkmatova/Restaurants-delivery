export default function dishesReducer(state, action) {
  switch (action.type) {
    case 'SET_DISHES':
      return {
        ...state,
        dishes: action.payload,
      };

    default:
      break;
  }
}
