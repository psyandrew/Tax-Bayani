import './ServicesPageStyle.css';
import HeaderNavbar from '../Global Components/HeaderNavbar.js'
import Footer from '../Global Components/Footer.js'
import ServicesHeadline from './Components/ServicesHeadline.js'
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
      // 1. Define your navbar height
      const navbarHeight = 80; 
      
      // 2. Get the element's distance from the top of the page
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      
      // 3. Subtract the navbar height so you stop just short of it
      const offsetPosition = elementPosition - navbarHeight;

      // 4. Scroll to that exact calculated pixel
      window.scrollTo({
        top: offsetPosition,
        behavior: 'auto' // Keeps your instant snap requirement
      });
    }
  }
}, [hash]); // This ensures it runs every time the URL hash changes



  
  return (
    <section className="services-page">
      < HeaderNavbar/>
      < ServicesHeadline />
      < ServicesSection bg={'ltg'} secID={'tax-compliance'}  txtblock={'TC'} pic={'tax-compliance'} head={'TAX COMPLIANCE AND FINANCIAL REPORTING'}/>
      < ServicesSection bg={'dkg'} secID={'business-permits'} txtblock={'BP'}  pic={'business-perm'} head={'BUSINESS PERMITS AND REGISTRATIONS'}/>
      < ServicesSection bg={'ltg'} secID={'business-transition'} txtblock={'BT'}  pic={'business-transition'} head={'BUSINESS TRANSITIONS AND UPDATES'}/>
      < Footer/>
    </section >
  );
}

export default ServicesPage;
