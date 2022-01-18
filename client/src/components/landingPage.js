import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';


export default function LandingPage({setCurrentUser,currentUser}) {

  function handleLogout() {
    fetch("/logout", { method: "DELETE" })
      .then(() => console.log("Delete successful"))
      .then((x) => {
        setCurrentUser("");
        navigate("/");
      });
  }

    return (
        <>
      <CssBaseline />
    <AppBar position="static" style={{ background: '#2E3B55' }} sx={{ p: 2 }}>
    <Toolbar variant="dense" onClick={() => navigate('/')}>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
          <FoodBankOutlinedIcon fontSize="large" />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
         NomNom
        </Typography>
        <Button variant="h6" color="inherit" component="div" sx={{ ml: 110 }} onClick={handleLogout}>
         logout
        </Button>
      </Toolbar>
    </AppBar>
        </>
    )
}

