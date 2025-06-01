import ContactItem from './ContactItem';

function ContactList({ contacts, onDelete, onEdit }) {
  return (
    <div>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          {...contact}
          onDelete={() => onDelete(contact.id)}
          onEdit={() => onEdit(contact)}
        />
      ))}
    </div>
  );
}

export default ContactList;
