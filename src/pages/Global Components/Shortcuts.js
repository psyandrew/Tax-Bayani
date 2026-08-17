import { useNavigate } from 'react-router-dom';

import './Shortcuts.css';
import ConsultShortcut from './ShortcutsConsult.js'

function Shortcuts() {
  return (
    <div className="shortcuts-container"> 
      <ServiceShortcut />
      <ConsultShortcut />
    </div>
  );
}

export default Shortcuts;


function ServiceShortcut(){

  const navigate = useNavigate();

  return (
    <div className="services-shortcuts">
      <h3>OUR SERVICES</h3>
      <b onClick={() => navigate('/services#tax-compliance')}>TAX COMPLIANCE</b>
      <b onClick={() => navigate('/services#fiscal-reporting')}>FINANCIAL REPORTS</b>
      <b onClick={() => navigate('/services#business-permits')}>BUSINESS PERMITS</b>
      <b onClick={() => navigate('/services#business-transition')}>BUSINESS UPDATES</b>
    </div>
  );
}