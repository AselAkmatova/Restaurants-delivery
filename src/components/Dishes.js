import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Dish from './Dish';

export default function Dishes({ dishes, updateDishes, currency, addToCart }) {
  let { placeid } = useParams();

  let [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:1717/eats/dishes/' + placeid)
      .then((r) => r.json())
      .then((data) => {
        updateDishes(data);
        setLoading(false);
      });
  }, []);

  let currencyValue = currency.currencyList[currency.selected];
  let currencyText = currency.selected;
  return (
    <>
      <div className='main__dishes dishes'>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          dishes.map((dish) => (
            <Dish
              currencyValue={currencyValue}
              currencyText={currencyText}
              addToCart={addToCart}
              data={dish}
            />
          ))
        )}
      </div>
    </>
  );
}
