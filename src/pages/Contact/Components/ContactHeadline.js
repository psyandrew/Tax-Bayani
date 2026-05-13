import logo from '../../Assets/logo.png';

function ContactHeadline() {
  return (
    <section className="contact-headline">
      <div className="contact-h2">
        <h2>CONTACT US</h2>
      </div>
      <img src={logo} alt="TaxBayani Logo" className="logo-image-contact" /> 
      <div className="contact-sell" id="logo">
        <h2>Connect with TAXBAYANI!</h2>
        <p>Do you need someone to back you up on accounting, tax, payroll, and other business related matters?</p>
      </div>

    </section >
  );
}

export default ContactHeadline;