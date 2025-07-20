import React from 'react';

function ContactForm() {
  return (
    <div className="section-container contact-form-section">
      <form className="contact-form">
        <div className="contact-form-field">
          <label className="label" htmlFor="contactName">
            Name
          </label>
          <input
            className="input"
            type="text"
            name="contactName"
            id="contactName"
            placeholder="Enter name"
          />
        </div>

        <div className="contact-form-field">
          <label className="label" htmlFor="contactNumber">
            Number
          </label>
          <input
            className="input"
            type="text"
            name="contactNumber"
            id="contactNumber"
            placeholder="Enter phone"
          />
        </div>

        <button type="submit" className="btn add-btn">
          Add contact
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
