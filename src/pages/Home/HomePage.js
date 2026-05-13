import './HomePageStyle.css';
import HeaderNavbar from '../Global Components/HeaderNavbar.js'
import Footer from '../Global Components/Footer.js'
import Headline from '../Home/Components/Headline.js'
import Services from '../Home/Components/Services.js'
import WhyUs from '../Home/Components/WhyUs.js'
import CTA from '../Home/Components/CTA.js'
import Consultation from '../Home/Components/Consult.js'


function HomePage() {
  return (
    <section className="Home">
      < HeaderNavbar/>
      < Headline />
      < Services />
      < CTA />
      < WhyUs />
      < Consultation />
      < Footer/>
    </section >
  );
}

export default HomePage;
