export default function currencyReducer(state, action) {
  switch (action.type) {
    case 'SET_CURRENCY':
      return {
        ...state,
        selected: action.payload,
      };

    default:
      return state;
  }
}
