import './FAQPageStyle.css';
import HeaderNavbar from '../Global Components/HeaderNavbar.js'
import Footer from '../Global Components/Footer.js'

import QueryBody from './Components/QueryBody.js'
import QueryHeadline from './Components/QueryHeadline.js'

function FAQPage() {
  return (
    <section className="FAQPage">
      < HeaderNavbar/>
      < QueryHeadline />
      < QueryBody />
      < Footer/>
    </section >
  );
}

export default FAQPage;

