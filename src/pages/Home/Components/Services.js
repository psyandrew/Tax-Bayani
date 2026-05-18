import { Neighbourhood, Book, Journal, HandCash} from 'iconoir-react';
import ServiceCard from './ServiceCard.js'
import './ServicesStyle.css'

function Services() {
  return (
    <section className="services-section">
      <h2 className="services-h2">OUR EXPERTISE</h2>
      <p className="services-h2-p">Here is how we can assist you with the important stuff, just let us handle it!</p>
      <div className="service-feature-card-container">
        <ServiceCard serviceCardProp={servicesOBJ[0]} icon={HandCash} stroke={1.5} linkTo={'/services#tax-compliance'}/>
        <ServiceCard serviceCardProp={servicesOBJ[1]} icon={Book} stroke={1.5} linkTo={'/services#fiscal-reporting'}/>
      </div>
      <div className="service-feature-card-container">
        <ServiceCard serviceCardProp={servicesOBJ[2]} icon={Journal} stroke={1.5} linkTo={'/services#business-permits'}/>
        <ServiceCard serviceCardProp={servicesOBJ[3]} icon={Neighbourhood} stroke={1.5} linkTo={'/services#business-transition'}/>        
      </div>
    </section>
  );
}

export default Services;

const servicesOBJ=[
  {
    "id": 1,
    "title": "TAX COMPLIANCE",
    "scope": "Income Tax, Business Tax, Withholding Taxes",
    "highlight":"No more quarterly deadline fears.",
    "sell": "We expertly manage the repetitive cycle of BIR filings. Just send us your figures, and we’ll handle the rest so you can stay focused on your work."
  },
  {
    "id": 2,
    "title": "FISCAL REPORTING",
    "scope": "Financial Statements, Audit Certification",
    "highlight":"Solid credibility for your business.",
    "sell": " We prepare the formal financial statements and Alphalists needed for annual compliance, Audit certifications required for bank loans, travel visas, or major contracts."
  },
  {
    "id": 3,
    "title": "BUSINESS PERMITS",
    "scope": "New Business Registration, Official Updates",
    "highlight":"Legitimize your business ASAP.",
    "sell": "Let's get you registered with the BIR. From your Certificate of Registration to securing official invoices.  Doing the legwork so you can start billing clients legally."
  },
  {
    "id": 4,
    "title": "BUSINESS TRANSITIONS",
    "scope": "Transfers, Tax Clearances, Terminations",
    "highlight":"Clean transitions, zero baggage.",
    "sell": "Whether moving or closing a business. Let us manage the documentation and clear the records to secure an official Tax Clearance, no more residual liabilities or open cases."
  }
]