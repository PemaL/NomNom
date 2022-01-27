import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FoodBankOutlinedIcon from "@mui/icons-material/FoodBankOutlined";
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

export default function RestaurantSignIn({setCurrentRestaurant}) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [session, setSession] = useState({ admin_email: "", password: "" });

  const handleSignIn = (e) => {
    e.preventDefault();
    fetch('/restaurantlogin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(session),
    })
      .then((res) => res.json())
      .then((x) => {
        x.admin_email && setCurrentRestaurant(x);
        alert("Login successful");
        navigate("/")
      });
  };

  return (
    <div className={classes.body}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{ background: "transparent", boxShadow: "none" }}
          sx={{ p: 2 }}
        >
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: -1 }}
              onClick={() => navigate("/")}
            >
              <FoodBankOutlinedIcon fontSize="large" sx={{ mr: 2, fontSize: 40 }} />
            </IconButton>
            <Typography variant="h4" color="inherit" component="div">
              NomNom
            </Typography>
            <div className={classes.button}>
              <Button variant="outlined" color="inherit" onClick={() => navigate("/restaurantSignUp")}>
                Register your restaurant 
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
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
            <Avatar sx={{ m: 1, bgcolor: "#2E3B55" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
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
                id="adminEmail"
                label="Admin Email"
                name="adminEmail"
                autoComplete="adminEmail"
                value={session.admin_email}
                onChange={(e) =>
                  setSession({ ...session, admin_email: e.target.value })
                }
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
                onChange={(e) =>
                  setSession({ ...session, password: e.target.value })
                }
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 5, mb: 2 }}
                style={{ background: "#2E3B55" }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/restaurantSignUp" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
    </div>
  );
}
