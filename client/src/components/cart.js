import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import CartItem from "./cartItem";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: "5%",
    position: "center",
    color: "#FFFFFF",
  },
  emptyButton: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
    background: "#2E3B55",
    borderRadius: 14,
  },
  checkoutButton: {
    minWidth: "150px",
    background: "#2E3B55",
    borderRadius: 14,
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "10%",
    color: "#FFFFFF",
    width: "100%",
    justifyContent: "space-between",
  },
}));

export default function Cart({
  cartItems,
  handleRemoveFromCart,
  clearCart,
  currentUser,
  handleAddToCart,
}) {
  const classes = useStyles();
  const navigate = useNavigate();
  const menu_id = cartItems.map((item) => item.id);
  const totalPrice = cartItems.reduce((price, item) => price + item.price, 0);

  function handlePost() {
    menu_id.map((i) => {
      fetch("/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ menu_id: i, customer_id: currentUser.id }),
      })
        .then((res) => res.json())
        .then(() => {
          clearCart();
          navigate("/orderPage");
        });
    });
  }

  let addedItems = cartItems.length ? (
    cartItems.map((item) => {
      return (
        <>
          <Grid spacing={1} sx={{ width: "150%", ml: 25, mt: 5 }}>
            <Grid item xs={12} sm={4} key={item.id}>
              <CartItem item={item} />
            </Grid>
          </Grid>
        </>
      );
    })
  ) : (
    <Typography variant="subtitle1" className={classes.cardDetails}>
      No items in bag, <Button color="inherit" onClick={() => navigate("/")}> add some items! </Button>
    </Typography>
  );

  return (
    <Container>
      <div className={classes.toolbar}>
        <Typography className={classes.title} variant="h3">
          {" "}
          Your Food Bag
        </Typography>
        {addedItems}
      </div>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: ${totalPrice}</Typography>
        <div>
          <Button
            variant="outlined"
            color="inherit"
            className={classes.emptyButton}
            type="button"
          >
            {" "}
            Empty Cart
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            className={classes.checkoutButton}
            type="button"
          >
            {" "}
            Check out
          </Button>
        </div>
      </div>
    </Container>
  );
}
