import React from 'react';

function ContactForm() {
  return (
    <div className="contact-form">
      <div className="contact-form__field">
        <label htmlFor="contactName">Name</label>
        <input type="text" name="contactName" id="contactName" />
      </div>

      <div className="contact-form__field">
        <label htmlFor="contactNumber">Number</label>
        <input type="text" name="contactNumber" id="contactNumber" />
      </div>

      <button type="submit">Add contact</button>
    </div>
  );
}

export default ContactForm;
