// El UseCallback se utiliza para memorizar una instancia de una función
// y evitar que se vuelva a renderizar si no cambia su valor.
// También se puede utilizar para evitar que se vuelva a renderizar un componente hijo

import { memo, useCallback, useState } from "react";

interface Contact {
  id: number;
  name: string;
  phone: string;
}

interface ContactProps {
  contact: Contact;
  onCall: (phone: string) => void;
}

const ContactCard = memo(({ contact, onCall }: ContactProps) => {
  console.log(`ContactCard render -> ${contact.name}`);

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>{contact.phone}</p>
      <button onClick={() => onCall(contact.phone)}>Call</button>
    </div>
  );
})

export const PhoneBook = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    { id: 1, name: "John Doe", phone: "123-456-7890" },
    { id: 2, name: "Jane Doe", phone: "098-765-4321" },
    { id: 3, name: "John Smith", phone: "456-789-0123" },
  ]);

  const [log, setLog] = useState<string>("");

  const makeCall = useCallback((phone: string) => {
    setLog(`Calling ${phone}`);
    console.log(`Calling ${phone}`);
  }, []);

  const addContact = () => {
    const newContact: Contact = {
      id: contacts.length + 1,
      name: `Contact ${contacts.length + 1}`,
      phone: `${Math.floor(Math.random() * 1000)}-${Math.floor( Math.random() * 1000)}-${Math.floor(Math.random() * 1000)}`,
    }

    setContacts([...contacts, newContact]);
  }

  return (
    <div>
      <h2>Phone Book</h2>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onCall={makeCall}
        />
      ))}
      <button onClick={addContact}>Add Contact</button>
      <p>{log}</p>
    </div>
  );
};
