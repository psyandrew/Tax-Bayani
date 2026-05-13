import ContactInvite from './ContactInvite';
import ContactForm from './ContactForm';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ContactBody() {

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Remove the '#' from the string (e.g., '#tax-compliance' -> 'tax-compliance')
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      }
    }
  }, [hash]); // This ensures it runs every time the URL hash changes

  return (
    <section className="contact-body">
      <ContactInvite />
      <ContactForm />
    </section>
  );
}

export default ContactBody;
