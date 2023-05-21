import * as React from 'react';
import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from 'redux/auth/operations';
import { fetchContacts } from "../redux/tasks/operations";
import { selectError, selectIsLoading } from "../redux/tasks/selectors";
import { ThreeDots } from 'react-loader-spinner';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';  
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useAuth } from 'hooks';

const theme = createTheme();

export const ContactsPage = () => {

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    const { user } = useAuth();

    return (
        <ThemeProvider theme={theme}>
          <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, position: 'fixed' }}
            >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    <a href="/goit-react-hw-08-phonebook"><p>PhoneBook</p></a>
                    </Typography>
                    <p>{user.email}</p>
                    <Button href="/goit-react-hw-08-phonebook" variant="outlined" sx={{ my: 1, mx: 1.5 }}
                    onClick={() => dispatch(logOut())}>
                        Logout
                    </Button>
            </Toolbar>
          </AppBar>
        <div
            style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', flexWrap: 'wrap', paddingTop: '150px' }}>
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
        </ThemeProvider>
    );
}

export default ContactsPage;
