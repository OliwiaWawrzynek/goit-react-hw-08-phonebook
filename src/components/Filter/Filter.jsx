import React from 'react';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setContactsFilter } from 'redux/filterSlice';
import { selectContactsFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const filterChangeHandler = event => {
    dispatch(setContactsFilter(event.target.value));
  };

  return (
    <div className={css.filter}>
      <h3>Find contacts by name:</h3>
      <input
        className={css.filterInput}
        id="filter"
        value={filter}
        onChange={filterChangeHandler}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};

export default Filter;
