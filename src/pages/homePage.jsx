// import React from 'react';

// export const HomePage = () => {
//     return (
//         <div>
//             <p>!This is HOME Page!</p>
//         </div>
//     )
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/OliwiaWawrzynek/goit-react-hw-08-phonebook.git">
        PhoneBook
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export const HomePage = () => {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <h1>PhoneBook</h1>
                  </Typography>
                  <Button href="https://oliwiawawrzynek.github.io/goit-react-hw-08-phonebook/register" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Register
          </Button>
          <Button href="https://oliwiawawrzynek.github.io/goit-react-hw-08-phonebook/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Container disableGutters maxWidth="sm" component="main" sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center' }}>
       <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <h1>Welcome!</h1>
          </Typography>
          <Button href="https://oliwiawawrzynek.github.io/goit-react-hw-08-phonebook/register" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Register
          </Button>
          <Button href="https://oliwiawawrzynek.github.io/goit-react-hw-08-phonebook/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </React.Fragment>
  );
}

