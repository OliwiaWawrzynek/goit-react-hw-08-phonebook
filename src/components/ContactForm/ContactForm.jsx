import propTypes from 'prop-types';
import css from './ContactForm.module.css';
import React, { useState } from "react";

const ContactForm = props => {
  const [value, setValue] = useState({
    name: '',
    number: '',
  });

  const { name, number } = value;

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = value;
    props.addContact(name, number);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValue(prevState => ({ ...prevState, [name]: value }));
  };

    return (
      <form className={css.contactForm} onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
        </label>
        <input
          className={css.contactInput}
          id="name"
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">
          Number
        </label>
        <input
          className={css.contactInput}
          id="number"
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.contactButton} type="submit">
          Add Contact
        </button>
      </form>
    );
  }

ContactForm.propTypes = {
  addContact: propTypes.func.isRequired,
  deleteContact: propTypes.func.isRequired,
};

export default ContactForm;
