import React, { useState } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import FoodBankOutlinedIcon from "@mui/icons-material/FoodBankOutlined";
import { useNavigate } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        NomNom
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: "#2E3B55",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: theme.spacing(4),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#2E3B55",
  },
  button: {
    marginLeft: "auto",
    borderRadius: 14,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    border: "4px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RestaurantSignUp() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    restaurant_code: "",
    name: "",
    admin_email: "",
    phone_number: "",
    description: "",
    hours: "",
    website: "",
    image_url: "",
    password: "",
    password_confirmation: "",
  });


  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.password === formData.password_confirmation) {
      fetch("/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then(navigate("/restaurantSignIn"));
    } else {
      alert("Password has match");
    }
    
    setFormData({
      restaurant_code: "",
      name: "",
      admin_email: "",
      phone_number: "",
      description: "",
      hours: "",
      website: "",
      image_url: "",
      password: "",
      password_confirmation: "",
    });
  }

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
              <FoodBankOutlinedIcon  sx={{ mr: 2,fontSize: 40  }} />
            </IconButton>
            <Typography variant="h4" color="inherit" component="div">
              NomNom
            </Typography>
            <div className={classes.button}>
              <Button variant="outlined" color="inherit" onClick={() => navigate("/restaurantSignIn")}>
              Restaurant Sign In
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="restaurantCode"
                  name="restaurantCode"
                  variant="outlined"
                  required
                  fullWidth
                  id="restaurantCode"
                  label="Restaurant Code"
                  value={formData.restaurant_code}
                  onChange={(e) =>
                    setFormData({ ...formData, restaurant_code: e.target.value })
                  }
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Restaurant Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData,name: e.target.value })
                  }
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  pattern=".+@globex\.com"
                  variant="outlined"
                  required
                  fullWidth
                  id="adminemail"
                  label="Admin Email"
                  name="adminEmail"
                  value={formData.admin_email}
                  onChange={(e) =>
                    setFormData({ ...formData, admin_email: e.target.value })
                  }
                  autoComplete="adminEmail"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="phoneNumber"
                  name="phoneNumber"
                  variant="outlined"
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  value={formData.phone_number}
                  onChange={(e) =>
                    setFormData({ ...formData, phone_number: e.target.value })
                  }
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="description"
                  name="description"
                  variant="outlined"
                  required
                  fullWidth
                  id="description"
                  label="Restaurant Description "
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData,description: e.target.value })
                  }
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="hours"
                  name="hours"
                  variant="outlined"
                  required
                  fullWidth
                  id="hours"
                  label="Restaurant hours "
                  value={formData.hours}
                  onChange={(e) =>
                    setFormData({ ...formData,hours: e.target.value })
                  }
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="website"
                  name="website"
                  variant="outlined"
                  required
                  fullWidth
                  id="website"
                  label="Restaurant website "
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData,website: e.target.value })
                  }
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="imageUrl"
                  name="imageUrl"
                  variant="outlined"
                  required
                  fullWidth
                  id="imageUrl"
                  label="Restaurant image Url "
                  value={formData.image_url}
                  onChange={(e) =>
                    setFormData({ ...formData,image_url: e.target.value })
                  }
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Confirm Password"
                  type="password"
                  id="confirm_password"
                  value={formData.password_confirmation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password_confirmation: e.target.value,
                    })
                  }
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
              style={{ background: "#2E3B55" }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link variant="body2" href="/signIn">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
