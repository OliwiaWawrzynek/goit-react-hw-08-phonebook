import css from './ContactForm.module.css';
import React from "react";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      addContact({
      name: form.elements.name.value,
      phone: form.elements.number.value
      })
    );
    form.reset();
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
      </label>
      <input
        className={css.contactInput}
        id="name"
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

export default ContactForm;
