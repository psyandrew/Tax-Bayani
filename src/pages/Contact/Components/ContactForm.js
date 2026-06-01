import { useForm, ValidationError } from '@formspree/react';
import mailIcon from '../../Assets/envelope-solid-dark.png';

function ContactForm() {
  // 'state' holds all the info (submitting, succeeded, errors)
  // 'handleSubmit' is the function that sends the data to Formspree
  const [state, handleSubmit] = useForm("mjgzgkwp");

  if (state.succeeded) {

    return(
      <div className="confirm-container"> 
        <img src={mailIcon} alt="Mail Icon" className="we-got-mail" />
        <p>MESSAGE RECEIVED</p> 
        <p>We'll reach out to you soon!</p> 
        <button className="submit-btn" onClick={() => window.location.reload()}>Send another message</button>
      </div>
    );
  }

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        
        {/* Name input - No onChange or value needed! */}
        <div className="form-group">
          <label htmlFor="name" className="visually-hidden">Name</label>
          <input type="text" id="name" name="name" placeholder="Name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        {/* Email input */}
        <div className="form-group">
          <label htmlFor="email" className="visually-hidden">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Phone input */}
        <div className="form-group">
          <label htmlFor="phone" className="visually-hidden">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Contact Number" />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>

        {/* Message input */}
        <div className="form-group">
          <label htmlFor="message" className="visually-hidden">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="How can we help you?" required></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button type="submit" className="submit-btn" disabled={state.submitting}>
          {state.submitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;