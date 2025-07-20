import { useState, useEffect } from 'react';

import './App.css';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';
import contactList from './data/contacts.json';

function App() {
  const [contacts, addContact] = useState(contactList);
  const [filter, setFilter] = useState('');

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const handleAddContact = (newContact) => {
    addContact((prevContacts) => [...prevContacts, newContact]);
  };

  console.log(filteredContacts);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox onFilter={setFilter} value={filter} />

      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;
