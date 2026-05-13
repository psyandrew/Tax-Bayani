function ContactForm(){
  return (
    <div className="contact-form-container">
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="visually-hidden">Name</label>
          <input type="text" id="name" name="name" placeholder="Name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="visually-hidden">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="visually-hidden">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Contact Number" />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="visually-hidden">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="How can we help you?" required></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;