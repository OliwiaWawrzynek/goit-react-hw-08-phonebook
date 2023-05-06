import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://64564a595f9a4f23613fd1b1.mockapi.io/';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll", 
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts')
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
        try {
            const {
                contacts: { contacts },
            } = thunkAPI.getState();
            if (contacts.find(item => item.name === contact.name)) {
                Notiflix.Notify.failure(
                `'${contact.name}' is already in contacts.`
                );
            return thunkAPI.rejectWithValue();
            }
            const response = await axios.post("/contacts", contact);
                Notiflix.Notify.success(
                `'${contact.name}' has been added to contacts list.`
            );
            return response.data;
            } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
            }
    }
)

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)
