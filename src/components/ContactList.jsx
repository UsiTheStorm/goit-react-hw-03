import { useState } from 'react';

function Contact({ contact }) {
  const { name, number } = contact;
  console.log(name);
  return (
    <li>
      <div>
        <div className="field">{name}</div>
        <div className="field">{number}</div>
      </div>
      <button className="btn">Delete</button>
    </li>
  );
}

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ul>
  );
}

export default ContactList;
