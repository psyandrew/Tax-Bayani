import './ConsultStyle.css'
import { Link } from 'react-router-dom';


function Consultation() {
  return (
    <section className="consultation-section">
        <h2 className="consultation-header">A WAY OUT OF TAX ISSUES</h2>
        <p className="consultation-sell">Facing tax hurdles or complex financial statements? Whether you are launching, scaling your business, or just need guidance on paperworks we are here to handle your compliance and reporting so you can focus on growth.</p>
        <p className="consultation-sell">Reach out today, and let’s start building your success!</p>
        <Link className="inq-btn" to="/contact" >REACH OUT</Link>
    </section>
  );
}

export default Consultation;
