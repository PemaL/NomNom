import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useNavigate} from 'react-router-dom';

function NavBar({setCurrentUser}) {

    const navigate = useNavigate();

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
        <ShoppingBasketIcon />
      </Toolbar>
    </AppBar>
        </>
    )
}

export default NavBar
