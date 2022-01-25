import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FoodBankOutlinedIcon from "@mui/icons-material/FoodBankOutlined";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useNavigate, useLocation } from "react-router-dom";
import Badge from "@mui/material/Badge";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  appBar: {
    background: "#2E3B55",
  },
  button: {
    marginLeft: "auto",
    borderRadius: 14,
  },
}));

function NavBar({ setCurrentUser, cartItems }) {
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();

  function handleLogout() {
    fetch("/logout", { method: "DELETE" })
      .then(() => console.log("Delete successful"))
      .then((x) => {
        setCurrentUser("");
        navigate("/");
      });
  }

  function handleOrderClick() {
    navigate("/orderPage");
  }

  return (
    <>
      <AppBar position="static" className={classes.appBar} sx={{ p: 2 }}>
        <Toolbar variant="dense">
          <Typography
            variant="h4"
            color="inherit"
            onClick={() => navigate("/")}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: -1 }}
            >
              <FoodBankOutlinedIcon sx={{ mr: 1, fontSize: 40 }} />
            </IconButton>
            NomNom
          </Typography>
          <div className={classes.button}>
            <Button variant="outlined" color="inherit" onClick={handleLogout}>
              logout
            </Button>
            {" "}
            {location.pathname !== "/orderPage" && (
              <Button variant="outlined" color="inherit" onClick={handleOrderClick}>
                My order
              </Button>
            )}
            {location.pathname !== "/cart" && (
              <IconButton aria-label="Show cart items" color="inherit">
                <Badge badgeContent={cartItems.length} color="secondary">
                  <ShoppingBasketIcon onClick={() => navigate("/cart")} />
                </Badge>
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
