import logo from '../images/header-logo.svg';
import { Bag } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export default function Header({
  data,
  handleCartIcon,
  currency,
  handleCurrency,
}) {
  return (
    <header className='header'>
      <Link to={`/`}>
        <img className='header__logo' src={logo} alt='logo' />
      </Link>

      <select
        className='header__currency'
        onChange={handleCurrency}
        value={currency.selected}
      >
        {Object.keys(currency.currencyList).map((item) => (
          <option>{item}</option>
        ))}
      </select>

      <div className='header__cart'>
        <Bag
          className='header__cart-icon'
          onClick={handleCartIcon}
          color='black'
        />
        <span className='header__cart-quantity'>{data.dishes.length}</span>
      </div>
    </header>
  );
}
