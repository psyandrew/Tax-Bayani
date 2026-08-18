import { Mail, Clock, MapPin } from 'iconoir-react';

const ContactInvite = () => {
  return (
    <div className="contact-invite">
      <div className="contact-page-details">



        {/* Email */}
        <div className="contact-info-item">
          <div className="icon-wrapper">
            <Mail height={30} width={30} strokeWidth={2.5} />
          </div>
          <div className="info-text">
            <p>hello@gabay.com</p>
          </div>
        </div>

        {/* Schedule/Clock */}
        <div className="contact-info-item">
          <div className="icon-wrapper">
            <Clock height={30} width={30} strokeWidth={2.5} />
          </div>
          <div className="info-text">
            <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
          </div>
        </div>

        {/* Location */}
        <div className="contact-info-item">
          <div className="icon-wrapper">
            <MapPin height={30} width={30} strokeWidth={2.5} />
          </div>
          <div className="info-text">
            <p>123 Street Name, City, Country</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInvite;

/*     

Phone 
        <div className="contact-info-item">
          <div className="icon-wrapper">
            <Phone height={30} width={30} strokeWidth={2.5} />
          </div>
          <div className="info-text">
            <p>+63 912 345 6789</p>
          </div>
        </div>


*/