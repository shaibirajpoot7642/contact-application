import React, { useState, useEffect } from "react";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.log(error));
  }, []);

  const [activeContact, setActiveContact] = useState(null);

  const handleClick = (contact) => {
    setActiveContact(contact);
  };

  return (
    <div className="App">
      <h1>Contacts</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button onClick={() => handleClick(contact)}>
              {contact.name}
            </button>
          </li>
        ))}

      </ul> 
      {activeContact && (
        <div className="contact-info">
          <h2>{activeContact.name}</h2>
          <p>{activeContact.email}</p>
          <p>{activeContact.phone}</p>
          <p>{activeContact.website}</p>
        </div>
      )}
    </div>
  );
}

export default App;
