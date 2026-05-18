import { useNavigate } from 'react-router-dom';

function Headline() {

  const navigate = useNavigate();

  return (
    <section className="headliner">
      <h2>Take your mind off your taxes and permits</h2>
      <p>We built TaxBayani because we believe navigating the paperwork to run a business or a freelance profession shouldn't keep you up at night.</p>
      <p>Whether you need to register your startup, manage your fiscal woes, or stay 100% tax compliant, we’ve got your back</p>
      
      <button className="banner-btn"onClick={() => navigate('/contact')}><p>Get In Touch</p></button>
    </section>
  );
}

export default Headline;
