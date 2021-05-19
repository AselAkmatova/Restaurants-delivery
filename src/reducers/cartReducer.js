export default function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      let inCart = state.dishes.filter((dish) => dish.id === action.dish.id);
      if (inCart.length === 0) {
        let newDishes = [...state.dishes, { ...action.dish, quantity: 1 }];
        return {
          ...state,
          dishes: newDishes,
        };
      } else {
        let newDishes = state.dishes.map((dish) => {
          if (dish.id !== action.dish.id) {
            return dish;
          } else {
            return { ...dish, quantity: dish.quantity + 1 };
          }
        });

        return {
          ...state,
          dishes: newDishes,
        };
      }

    case 'DELETE_IN_CART':
      return {
        ...state,
        dishes: state.dishes.filter((dish) => dish.id !== action.payload),
      };

    default:
      break;
  }
}
