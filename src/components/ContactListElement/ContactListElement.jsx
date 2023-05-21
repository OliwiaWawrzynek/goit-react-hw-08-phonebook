import React from 'react';
import propTypes from 'prop-types';
import css from './ContactListElement.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/tasks/operations';

const ContactListElement = props => {
  const dispatch = useDispatch();

  const ContactDeleteHandler = () => {
    dispatch(deleteContact(props.id));
  };

  return (
    <li className={css.contactElement}>
      <p>{props.name}</p>
      <p>{props.number}</p>
      <button
        className={css.button}
        type="button"
        onClick={ContactDeleteHandler}>
        Delete
      </button>
    </li>
  );
};

ContactListElement.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};

export default ContactListElement;
