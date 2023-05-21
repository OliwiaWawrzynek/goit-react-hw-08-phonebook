import css from './ContactForm.module.css';
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/tasks/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

    const validateName = name => {
    const pattern =
      /^[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]+(([' -][a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż])?[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]*)*$/;
    return pattern.test(name);
  };

  const validateNumber = number => {
    const apattern =
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
    return apattern.test(number);
  };

  const onNameChange = e => {
    setName(e.target.value);
  };

  const onPhoneChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    if (validateName(name) && validateNumber(number)) {
      dispatch(
        addContact({
          name: form.elements.name.value,
          number: form.elements.number.value
        })
      );
    }

    form.reset();
    setName('');
    setNumber('');
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
        value={name}
        onChange={onNameChange}
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
        value={number}
        onChange={onPhoneChange}
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
