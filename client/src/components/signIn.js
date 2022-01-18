import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import {useNavigate} from 'react-router-dom';


function Copyright(props) {
  
 
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        NomNom
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn({currentUser, setCurrentUser}) {
  const navigate = useNavigate();
  const [session, setSession] = useState({email:"", password:""});

  const handleSignIn = (e) => {
    e.preventDefault();
    fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(session)
      })
        .then(res => res.json())
        .then(x => {
          x.email && setCurrentUser(x)
          navigate('/landingPage')
        })
        }
       
  return (
    <div style={{ background: '#2E3B55'}} >
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" style={{ background: '#2E3B55' }} sx={{ p: 2 }} >
      <Toolbar variant="dense" onClick={() => navigate('/')}>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
          <FoodBankOutlinedIcon fontSize="large" />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
         NomNom
        </Typography>
      </Toolbar> 
    </AppBar>
  </Box>
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs"  style={{ background: '#FFFFFF' }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
          
        >
          <Avatar sx={{ m: 1, bgcolor: '#2E3B55' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSignIn} noValidate sx={{ mt: 1 }} >
            <TextField
              margin="normal"
              required
              fullWidth
              id="Email"
              label="Email"
              name="Email"
              autoComplete="Email"
              value={session.email}
              onChange={(e) => setSession({...session, email: e.target.value})}

              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={session.password}
              onChange={(e) => setSession({...session, password: e.target.value})}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 2 }}
              style={{ background: '#2E3B55' }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2" >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}