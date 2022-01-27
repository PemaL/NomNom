import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useNavigate } from "react-router-dom";

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
    width: "100%", 
    marginTop: theme.spacing(3),
    border: "4px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RestaurantProfileEdit({currentRestaurant}) {
  const classes = useStyles();
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    description: "",
    hours: "",
    website: "",
    image_url: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/restaurants/${currentRestaurant.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then(navigate("/"));
     setFormData({
        name: "",
        phone_number: "",
        description: "",
        hours: "",
        website: "",
        image_url: "",
      });
    }
    
  return (
    <div className={classes.body}>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Edit Restaurant 
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
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
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{ background: "#2E3B55" }}
            >
              Update
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
