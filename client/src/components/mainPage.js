import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import FoodBankOutlinedIcon from "@mui/icons-material/FoodBankOutlined";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  body: {
    backgroundColor: "#2E3B55",
  },
  button: {
    marginLeft: "auto",
    borderRadius: 14,
  },
}));

export default function MainPage() {
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
    const classes = useStyles();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classes.body} >
			<CssBaseline />
      <AppBar
          position="static"
          style={{ background: "transparent", boxShadow: "none" }}
          sx={{ p: 2 }}
          className={classes.body}
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
						<Button
							id="demo-positioned-button"
							aria-controls={
								open ? "demo-positioned-menu" : undefined
							}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							onClick={handleClick}
              variant="outlined"
              color="inherit"
						>
							Restaurant
						</Button>
						<Menu
							id="demo-positioned-menu"
							aria-labelledby="demo-positioned-button"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							anchorOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
						>
							<MenuItem
								onClick={() => navigate("/restaurantSignIn")}
							>
								Log In
							</MenuItem>
							<MenuItem
								onClick={() => navigate("/restaurantSignUp")}
							>
								Register Restaurant
							</MenuItem>
						</Menu>
					</div>
				</Toolbar>
			</AppBar>

			<main>
				{/* Hero unit */}
				<Box
					sx={{
						bgcolor: "#2E3B55",
						pt: 20,
						pb: 22,
					}}
				>
					<Container maxWidth="sm">
						<Typography
							component="h1"
							variant="h1"
							align="center"
							color="#e8eaed"
							gutterBottom
						>
							NomNom away...
						</Typography>
						<Stack
							sx={{ pt: 4 }}
							direction="row"
							spacing={2}
							justifyContent="center"
						>
							<Button
								variant="contained"
								sx={{ borderRadius: 28, boxShadow: 10 }}
								style={{ background: "#2E3B55" }}
								component={Link}
								to="/signIn"
							>
								Sign In
							</Button>
							<Button
								variant="contained"
								sx={{ borderRadius: 28, boxShadow: 10 }}
								style={{ background: "#2E3B55" }}
								component={Link}
								to="/signUp"
							>
								Sign Up
							</Button>
						</Stack>
					</Container>
				</Box>
			</main>
		</div>
	);
}
