import './ContactItem.css';

function ContactItem({ id, name, phone, email, onDelete, onEdit }) {
  return (
    <div className="contact-item">
      <p><strong>{name}</strong></p>
      <p>{phone}</p>
      <p>{email}</p>
      <button className="edit" onClick={onEdit}>Editar</button>
      <button className="delete" onClick={onDelete}>Deletar</button>
    </div>
  );
}

export default ContactItem;
