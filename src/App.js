import './styles/App.css';
import './styles/Responsive.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Restaurants from './components/Restaurants';
import Dishes from './components/Dishes';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';

import cartReducer from './reducers/cartReducer';
import dishesReducer from './reducers/dishesReducer';
import currencyReducer from './reducers/currencyReducer';
import { createContext, useReducer, useState } from 'react';
import ModalCart from './components/ModalCart';
export let AppContext = createContext(null);

function App() {
  let [cart, cartDispatch] = useReducer(cartReducer, { dishes: [] });

  let [{ dishes }, dishesDispatch] = useReducer(dishesReducer, {
    dishes: [],
  });

  let [cartModal, setCartModal] = useState('');

  let [currency, currencyDispatch] = useReducer(currencyReducer, {
    selected: 'kgs',
    currencyList: {
      kgs: 1,
      usd: 0.012,
      tenge: 5,
    },
  });

  let addToCart = (id) => {
    let selectedDish = dishes.filter((dish) => dish.id === id);
    cartDispatch({ type: 'ADD_TO_CART', dish: selectedDish[0] });
  };

  let updateDishes = (data) => {
    dishesDispatch({ type: 'SET_DISHES', payload: data });
  };

  let deleteItemInCart = (id) => {
    cartDispatch({ type: 'DELETE_IN_CART', payload: id });
  };

  let handleCartIcon = () => {
    setCartModal('opened');
  };

  let handleCurrency = (e) => {
    console.log(e.target.value);
    currencyDispatch({ type: 'SET_CURRENCY', payload: e.target.value });
  };

  return (
    <>
      <AppContext.Provider>
        <Router>
          <Header
            handleCurrency={handleCurrency}
            currency={currency}
            handleCartIcon={handleCartIcon}
            data={cart}
          />
          <section className='main'>
            <Switch>
              <Route path='/' exact component={Restaurants} />

              <Route path='/dishes/:placeid'>
                <Dishes
                  dishes={dishes}
                  addToCart={addToCart}
                  updateDishes={updateDishes}
                  currency={currency}
                />
              </Route>
              <Route path='/cart/' component={Cart} />
            </Switch>
          </section>
          <ModalCart
            setCartModal={setCartModal}
            data={cart}
            cartModal={cartModal}
            deleteItemInCart={deleteItemInCart}
          />
          <Footer />
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
