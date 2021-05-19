import logo from '../images/header-logo.svg';
import Languages from './Languages';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className='footer'>
      <img className='footer__logo' src={logo} alt='logo' />
      <div className='footer__nav nav'>
        <div className='nav__col'>
          <Languages />
          <span className='hashtag'>UberEats</span>
          <SocialLinks />
        </div>
        <nav className='nav__col col'>
          <a className='col__link' href='#'>
            About UberEats
          </a>
          <a className='col__link' href='#'>
            Become a Delivery Partner
          </a>
          <a className='col__link' href='#'>
            Become a Restaurant Partner
          </a>
        </nav>
        <nav className='nav__col col'>
          <a className='col__link' href='#'>
            See all cities
          </a>
          <a className='col__link' href='#'>
            Pricing
          </a>
          <a className='col__link' href='#'>
            Help
          </a>
          <a className='col__link' href='#'>
            FAQs
          </a>
        </nav>
      </div>
      <nav className='footer__copyright copyright'>
        <a href='#' className=' copyright__item'>
          © 2017 Uber Technologies Inc.
        </a>
        <a href='#' className='copyright__item'>
          Privacy
        </a>
        <a href='#' className='copyright__item '>
          Terms
        </a>
      </nav>
    </footer>
  );
}
