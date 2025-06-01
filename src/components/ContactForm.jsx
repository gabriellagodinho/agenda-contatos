import { useState, useEffect } from 'react';
import './ContactForm.css';

function ContactForm({ onAdd, onClose, initialData }) {
  const [name, setName] = useState(initialData?.name || '');
  const [phone, setPhone] = useState(initialData?.phone || '');
  const [email, setEmail] = useState(initialData?.email || '');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setPhone(initialData.phone);
      setEmail(initialData.email);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      phone,
      email,
      ...(initialData?.id && { id: initialData.id })
    };
    onAdd(newContact);
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Nome" required />
      <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Telefone" required />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <button type="submit">{initialData ? "Atualizar" : "Adicionar"}</button>
      <button type="button" onClick={onClose}>Cancelar</button>
    </form>
  );
}

export default ContactForm;
