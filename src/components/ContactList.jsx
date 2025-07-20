import { useState } from 'react';

function Contact({ contact, onDelete }) {
  const { name, number, id } = contact;
  return (
    <li className="contact-item">
      <div className="contact-details">
        <div className="contact-name">{name}</div>
        <div className="contact-number">{number}</div>
      </div>
      <button className="btn contact-btn__delete-btn" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}

function ContactList({ contacts, onDelete }) {
  return (
    <div className="section-container contacts-list-section">
      <ul className="contacts-list">
        {contacts.map((contact) => (
          <Contact contact={contact} key={contact.id} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
