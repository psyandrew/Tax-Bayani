import { useNavigate } from 'react-router-dom';

function Headline() {

  const navigate = useNavigate();

  return (
    <section className="headliner">
      <h2>Take your mind off your taxes.</h2>
      <p>let's end the trend of you spending hours stressing over tracking deadlines, filling out confusing BIR forms, and worrying about accidental penalties can take over your life.</p>
      <p>Navigating the paperwork to run a legitimate startup or a freelance profession shouldn't keep you up at night. Whether you need to register your solo business, manage professional invoices, or stay 100% tax compliant, we’ve got your back.</p>
      <button onClick={() => navigate('/contact')}><p>test</p></button>
    </section>
  );
}

export default Headline;
