import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';


export default function mainPage() {
  return (
    <>
      <CssBaseline />
    <AppBar position="static" style={{ background: '#2E3B55' }} sx={{ p: 2 }}>
      <Toolbar variant="dense" onClick={() => console.log("clicked")}>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
          <FoodBankOutlinedIcon fontSize="large" />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
         NomNom
        </Typography>
        <Typography variant="h6" color="inherit" component="div" sx={{ ml: 110 }}>
         List your restaurant
        </Typography>
      </Toolbar>
    </AppBar>
 
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: '#2E3B55',
            pt: 20,
            pb: 22,
          }}
        >
          <Container maxWidth="sm" >
            <Typography  
              component="h1"
              variant="h2"
              align="center"
              color="#e8eaed"
              gutterBottom
            >
              NOmNOmNoM
            </Typography>
            <Typography variant="h5" align="center" color="#e8eaed" paragraph>
              NomNom away...
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" sx={{ borderRadius: 28,boxShadow: 10  }} style={{ background: '#2E3B55' }} component={Link} to="/signIn">Sign In</Button>
              <Button variant="contained" sx={{ borderRadius: 28,boxShadow: 10 }} style={{ background: '#2E3B55' }} component={Link} to="/signUp">Sign Up</Button>
            </Stack>
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
        </Typography>
      </Box>
      
      {/* End footer */}
      </>
  );

}
