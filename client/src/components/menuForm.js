import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: "#2E3B55",
  },
  button: {
    marginLeft: "auto",
    margin: 20,
    borderRadius: 14,
  },
}));


export default function RestaurantSignIn({currentRestaurant, setCurrentRestaurant }) {
  const [myMenus, setMyMenus] = useState([]);
  const classes = useStyles();
  const navigate = useNavigate();
  const [session, setSession] = useState({name: "",description:"", price: 0, image_url:""});

  const handleSignIn = (e) => {
    e.preventDefault();
    fetch('/menus', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(session),
    })
      .then((res) => res.json())
      .then((x) => {
        x.name && setMyMenus(x);
        alert("Added menu");
        navigate("/")
      });
  };

  return (
    <div className={classes.body}>
        <Container
          component="main"
          maxWidth="xs"
          style={{ background: "#FFFFFF" }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >

            <Typography component="h1" variant="h5">
              Create a New Item 
            </Typography>
            <Box
              component="form"
              onSubmit={handleSignIn}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Food name"
                name="name"
                autoComplete="name"
                value={session.name}
                onChange={(e) =>
                  setSession({ ...session, name: e.target.value })
                }
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                autoComplete="description"
                value={session.description}
                onChange={(e) =>
                  setSession({ ...session, description: e.target.value })
                }
                autoFocus
              />
               <TextField
                margin="normal"
                required
                fullWidth
                type="number"
                id="price"
                label="Price"
                name="price"
                autoComplete="price"
                value={session.price}
                onChange={(e) =>
                  setSession({ ...session, price: e.target.value })
                }
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth 
                id="image_url"
                label="Image_url"
                name="image_url"
                autoComplete="image_url"
                value={session.image_url}
                onChange={(e) =>
                  setSession({ ...session, image_url: e.target.value })
                }
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 5, mb: 2 }}
                style={{ background: "#2E3B55" }}
              >
                Create a Menu Item
              </Button>
            </Box>
          </Box>
        </Container>
    </div>
  );
}
