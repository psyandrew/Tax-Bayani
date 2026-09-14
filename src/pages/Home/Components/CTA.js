import './CTAStyle.css'
import { Mail, ChatBubble, FacebookTag} from 'iconoir-react';


function CTA() {
  return (
    <section className="cta">
        <div className="contact-card-container">
          <div  className="contact-card">
            <div className="contact-icon-bg">
              < Mail height={40} width={40}  strokeWidth={1.75} className="contact-icon"  />
            </div>
            <p>taxbayani@gmail.com</p>
          </div>

          <div  className="contact-card">
            <div className="contact-icon-bg">
              < ChatBubble height={40} width={40}  strokeWidth={1.75} className="contact-icon" />
            </div>
            <p>m.me/Taxbayani</p>
          </div>

          <div  className="contact-card">
            <div className="contact-icon-bg">
              < FacebookTag height={40} width={40}  strokeWidth={1.75} className="contact-icon"  />
            </div>
            <p>fb/Taxbayani</p>
          </div>
        </div>      
    </section>
  );
}

export default CTA;
/*          
<div  className="contact-card">
            <div className="contact-icon-bg">
              < Phone height={40} width={40}  strokeWidth={1.75} className="contact-icon" />
            </div>
            <p>0912-345-6789</p>
          </div>
*/