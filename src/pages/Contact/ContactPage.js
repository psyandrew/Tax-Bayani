import './ContactPageStyle.css';
import HeaderNavbar from '../Global Components/HeaderNavbar.js'
import Footer from '../Global Components/Footer.js'
//import  from './Components/.js'


import ContactHeadline from './Components/ContactHeadline.js'
import ContactBody from './Components/ContactBody.js'


function ContactPage() {
  return (
    <section className="ContactPage">
      < HeaderNavbar/>
      < ContactHeadline />
      < ContactBody />
      < Footer/>
    </section >
  );
}

export default ContactPage;
