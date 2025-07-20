import { useState } from 'react';

import './App.css';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';
import contactList from './data/contacts.json';

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contactList} />
    </div>
  );
}

export default App;
