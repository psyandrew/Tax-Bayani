import { Mail, Clock, ChatBubble, FacebookTag } from 'iconoir-react';

const ContactInvite = () => {
  return (
    <div className="contact-invite">
      <div className="contact-page-details">

        {/* Email */}
        <div className="contact-info-item">
          
          <div className="icon-wrapper">
            <Mail height={45} width={45} strokeWidth={1.5} />
          </div>

          <div className="info-text">
            <p>taxbayani@gmail.com</p>
          </div>
        
        </div>

        {/* Schedule/Clock */}
        <div className="contact-info-item">

          <div className="icon-wrapper">
            <Clock height={45} width={45} strokeWidth={1.5} />
          </div>

          <div className="info-text">
            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          </div>

        </div>

        {/* Messenger */}
        <div className="contact-info-item">

          <div className="icon-wrapper">
            <ChatBubble height={45} width={45} strokeWidth={1.5} />
          </div>
          <div className="info-text">
            <p>m.me/Taxbayani</p>
          </div>
        </div>

        {/* fb page  */}
        <div className="contact-info-item">

          <div className="icon-wrapper">
            <FacebookTag height={45} width={45} strokeWidth={1.5} />
          </div>

          <div className="info-text">
            <p>fb/Taxbayani</p>
          </div>

         </div> 



        {/* END  */}

      </div>
    </div>
  );
};

export default ContactInvite;

/*     

Phone 
        <div className="contact-info-item">
          <div className="icon-wrapper">
            <Phone height={45} width={45} strokeWidth={1.5} />
          </div>
          <div className="info-text">
            <p>+63 912 345 6789</p>
          </div>
        </div>


*/