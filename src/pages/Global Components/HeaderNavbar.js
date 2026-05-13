import { Link, NavLink } from 'react-router-dom'; // we will use Link at a later time
import './FooterHeaderNavbarStyles.css';
import logo from '../Assets/logo.png';

function HeaderNavbar() {
  return (
    <div className="header-navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="TaxBayani Logo" className="logo-image" />
          <p>TAXBAYANI</p>
        </Link>
        <nav className="navmenu">
          <NavLink to="/services" className="nav-btn">SERVICES</NavLink>
          <NavLink to="/faq" className="nav-btn">FAQs</NavLink>
          <NavLink to="/contact" className="nav-btn navmenu-highlight">CONTACT</NavLink>
        </nav>
      </div>
    </div>
  );
}

export default HeaderNavbar;
