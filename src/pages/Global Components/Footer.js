import facebookIcon from '../Assets/facebook-icon-square.png';
import { Mail,  ChatBubble} from 'iconoir-react';
import './FooterHeaderNavbarStyles.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col-1">
          <img src={logo} alt="TaxBayani Logo" className="logo-image-footer" />
          <h2>TAXBAYANI</h2>
          <p>Business solutions for local enterprises</p>
        </div>
        <div className="footer-col-2">
          <h3><Link to="/faq" className="footer-header-link">FAQ</Link></h3>
          <h3><Link to="/services" className="footer-header-link">OUR SERVICES</Link></h3>
          <div className='services-li'>
            <Link to="/services#tax-compliance" className="footer-mini-link"><span className="arrow">&gt;</span> Tax Compliance</Link>
            <Link to="/services#tax-compliance" className="footer-mini-link"><span className="arrow">&gt;</span> Financial Reports</Link>
            <Link to="/services#business-permits" className="footer-mini-link"><span className="arrow">&gt;</span> Business Permits</Link>
            <Link to="/services#business-transition" className="footer-mini-link"> <span className="arrow">&gt;</span> Business Updates</Link>
          </div>
        </div>
        <div className="footer-col-3">
          <h2><Link to="/contact" className="footer-header-link">CONTACT US</Link></h2>
          <div className="footer-contact-item">
            <Mail className="contact-icon-footer" />
            <p className="contact-detail">: taxbayani@gmail.com</p>
          </div>
          <div className="footer-contact-item">
            <ChatBubble className="contact-icon-footer" />
            <p className="contact-detail">: m.me/Taxbayani</p>
          </div>
          <div className="social-container">
            <a href="https://www.facebook.com/profile.php?id=61591518763841" target="_blank" rel="noreferrer">
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <p>fb/Taxbayani</p>
          </div>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
/*  
<div className="footer-contact-item">
            <Phone className="contact-icon-footer" />
            <p className="contact-detail">: +63 917 123 4567</p>
          </div>
*/