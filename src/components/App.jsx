// import React from 'react';
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import Nav from "./components/Nav";
// import ContactList from './ContactList/ContactList';
// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "../redux/operations";
// import { selectError, selectIsLoading } from "../redux/selectors";
// import { ThreeDots } from 'react-loader-spinner'
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { RegisterPage } from '../pages/registerPage';
import { ContactsPage } from '../pages/contactsPage';

export const App = () => {
  
  return (
    <div>
      <Suspense fallback={<div><p>Loading..</p></div>}>
        <Routes>
          <Route path="/" element={< HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </div>
  )
};

export default App;
