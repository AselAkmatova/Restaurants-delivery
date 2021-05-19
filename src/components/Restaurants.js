import { useEffect, useReducer } from 'react';
import restaurantsReducer from '../reducers/restaurantsReducer';
import Restaurant from './Restaurant';

export default function Restaurants() {
  let [restaurants, dispatch] = useReducer(restaurantsReducer, {
    restaurants: [],
    loading: true,
  });

  useEffect(() => {
    fetch('http://localhost:1717/eats/places')
      .then((r) => r.json())
      .then((data) => dispatch({ type: 'SET_RESTAURANTS', payload: data }));
  }, []);

  return (
    <div className='main-restaurants restaurants'>
      {restaurants.loading ? (
        <h2>Loading...</h2>
      ) : (
        restaurants.restaurants.map((restaurant) => (
          <Restaurant data={restaurant} />
        ))
      )}
    </div>
  );
}
