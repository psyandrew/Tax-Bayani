import { Link } from 'react-router-dom';

function Headline() {

  return (
    <section className="headliner">
      <div className="headline-sell">
        <h2 className="headline-sell-h2 a1">TAXBAYANI BUSINESS SOLUTIONS</h2>

        <p className='headline-sell-p a2'>Whether you need to register your startup, sort out your fiscal woes, or stay 100% tax compliant, we’ve got your back</p>

      
        
          <Link className="banner-btn" to="/contact">GET IN TOUCH</Link>
      </div>
    </section>
  );
}

export default Headline;
