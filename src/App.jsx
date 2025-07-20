import { useState, useEffect } from 'react';

import './App.css';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';
import contactList from './data/contacts.json';

function App() {
  const [contacts, setContacts] = useState(contactList);
  const [filter, setFilter] = useState('');

  const filteredContacts = contacts.filter((contact) =>
    contact.name?.toLowerCase().includes(filter.toLowerCase()),
  );

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((cont) => cont.id !== id));
  };

  console.log(filteredContacts);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox onFilter={setFilter} value={filter} />

      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;
