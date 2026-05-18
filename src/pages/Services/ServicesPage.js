import './ServicesPageStyle.css';
import HeaderNavbar from '../Global Components/HeaderNavbar.js'
import Footer from '../Global Components/Footer.js'
import ServicesSection from './Components/ServicesSection.js'

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function ServicesPage() {

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Remove the '#' from the string (e.g., '#tax-compliance' -> 'tax-compliance')
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      }
    }
  }, [hash]); // This ensures it runs every time the URL hash changes



  
  return (
    <section className="services-page">
      < HeaderNavbar/>
      < ServicesSection bg={'dkg'} secID={'tax-compliance'}  txtblock={'TC'} pic={'tax-compliance'} head={'TAX COMPLIANCE'}/>
      < ServicesSection bg={'ltg'} secID={'fiscal-reporting'} txtblock={'FR'}  pic={'fiscal-rep'} head={'FISCAL REPORTING'} />
      < ServicesSection bg={'dkg'} secID={'business-permits'} txtblock={'BP'}  pic={'business-perm'} head={'BUSINESS PERMITS'}/>
      < ServicesSection bg={'ltg'} secID={'business-transition'} txtblock={'BT'}  pic={'business-transition'} head={'BUSINESS TRANSITION'}/>
      < Footer/>
    </section >
  );
}

export default ServicesPage;
