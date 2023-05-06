import React from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/operations";
import { selectError, selectIsLoading } from "../redux/selectors";

export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div
      style={{marginLeft: '50px',}}>
      <h1>PhoneBook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <h4>Loading in progress, please wait...</h4>}
      {error}
      <ContactList />
    </div>
  );
};

export default App;
