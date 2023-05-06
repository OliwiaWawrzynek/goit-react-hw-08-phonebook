import React from 'react';
import ContactListElement from 'components/ContactListElement/ContactListElement';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactlist}>
      {filteredContacts.map(contact => (
          <ContactListElement
            key={contact.contactId}
            id={contact.contactId}
            name={contact.name}
            number={contact.phone}
          />
        ))
      }
    </ul>
  );
};

export default ContactList;
