import { Link } from 'react-router-dom';

function Headline() {

  return (
    <section className="headliner">
      <div className="headline-sell">
        <h2 className="headline-sell-h2 a1">TAXBAYANI BUSINESS SOLUTIONS</h2>

        <p className='headline-sell-p a2'>Whether you need to register your startup, manage your fiscal woes, or stay 100% tax compliant, we’ve got your back</p>

        <p className='headline-sell-p a2'>We built TaxBayani because we believe navigating the paperwork to run a business or a freelance profession shouldn't keep you up at night.</p>
        
          <Link className="banner-btn" to="/contact">GET IN TOUCH</Link>
      </div>
    </section>
  );
}

export default Headline;
