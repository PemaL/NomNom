import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FoodBankOutlinedIcon from "@mui/icons-material/FoodBankOutlined";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  appBar: {
    background: "#2E3B55",
  },
  button: {
    marginLeft: "auto",
  },
}));

function NavBar({ setCurrentUser, cartItems }) {
  const navigate = useNavigate();
  const classes = useStyles();

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
      <AppBar position="static" className={classes.appBar} sx={{ p: 2 }}>
        <Toolbar variant="dense" >
          <Typography variant="h6" className={classes.logo} color="inherit" onClick={() => navigate("/")}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
              
            >
              <FoodBankOutlinedIcon fontSize="large" />
            </IconButton>
            NomNom
          </Typography>
          <div className={classes.button}>
            <Button color="inherit" onClick={handleLogout}>
              logout
            </Button>
            <IconButton aria-label="Show cart items" color="inherit" >
              <Badge badgeContent={cartItems.length} color="secondary">
                <ShoppingBasketIcon onClick={() => navigate("/cart")}/>
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
