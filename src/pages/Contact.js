import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../scss/Contact.scss'

function Contact() {
  const [state, handleSubmit] = useForm("xayzaabw");
  if (state.succeeded) {
      return (
      <div className="Contact" id="contact">
        <h1>Merci!</h1>
      </div>
    );
  }
  return (
    <div className="Contact" id="contact">
      <h1>Me contacter</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Adresse email
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label>
        Message
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Envoyer
      </button>
    </form>
  </div>
  );
}

export default Contact;
