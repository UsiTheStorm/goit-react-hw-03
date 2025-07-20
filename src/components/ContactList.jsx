import { useState } from 'react';

function Contact({ contact }) {
  const { name, number } = contact;
  //   console.log(name);
  return (
    <li className="contact-item">
      <div className="contact-details">
        <div className="contact-name">{name}</div>
        <div className="contact-number">{number}</div>
      </div>
      <button className="btn contact-btn__delete-btn">Delete</button>
    </li>
  );
}

function ContactList({ contacts }) {
  return (
    <div className="section-container contacts-list-section">
      <ul className="contacts-list">
        {contacts.map((contact) => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
