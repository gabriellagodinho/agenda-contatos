import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

const API_URL = 'http://localhost:3001/contacts';

function App() {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setContacts(data));
  }, []);

  const addContact = (contact) => {
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contact)
    })
    .then(res => res.json())
    .then(data => {
      setContacts([...contacts, data]);
      setShowForm(false);
    });
  };

  const deleteContact = (id) => {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      .then(res => {
        if (res.ok) {
          setContacts(contacts.filter(c => c.id !== id));
        }
      });
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
  };

  const updateContact = (updatedContact) => {
    fetch(`${API_URL}/${updatedContact.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedContact)
    })
    .then(res => res.json())
    .then(data => {
      setContacts(contacts.map(c => c.id === data.id ? data : c));
      setEditingContact(null);
    });
  };

  return (
    <div className="App">
      <h1>Agenda de Contatos</h1>

      {!showForm && !editingContact && (
        <button onClick={() => setShowForm(true)}>Novo Contato</button>
      )}

      {showForm && (
        <ContactForm
          onAdd={addContact}
          onClose={() => setShowForm(false)}
        />
      )}

      {editingContact && (
        <ContactForm
          initialData={editingContact}
          onAdd={updateContact}
          onClose={() => setEditingContact(null)}
        />
      )}

      <ContactList
        contacts={contacts}
        onDelete={deleteContact}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;
