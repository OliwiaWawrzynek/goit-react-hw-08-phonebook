import React from 'react';
import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/operations";
import { selectError, selectIsLoading } from "../redux/selectors";
import { ThreeDots } from 'react-loader-spinner'  

export const ContactsPage = () => {

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return (
        <div
            style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', flexWrap: 'wrap' }}>
            <h1>PhoneBook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            {isLoading && !error && <div>
                <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="pink"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </div>}
             {error}
            <ContactList />
        </div>
    );
}
