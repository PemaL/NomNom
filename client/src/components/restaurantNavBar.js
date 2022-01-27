import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FoodBankOutlinedIcon from "@mui/icons-material/FoodBankOutlined";
import { useNavigate,useLocation} from "react-router-dom";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
	appBar: {
		backgroundColor: "#2E3B55",
	},
	button: {
		marginLeft: "auto",
		borderRadius: 14,
	},
}),{});

export default function RestaurantNavBar({ setCurrentRestaurant }) {
	const navigate = useNavigate();
    const classes = useStyles();
	const location = useLocation();


	function handleLogout() {
		fetch("/restaurantlogout", { method: "DELETE" })
			.then(() => console.log("Delete successful"))
			.then((x) => {
				setCurrentRestaurant("");
				navigate("/");
			});
	}

	return (
		<div className={classes.appBar}>
			<AppBar position="static" style={{ background: "transparent", boxShadow: "none" }} sx={{ p: 2 }}>
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
							<FoodBankOutlinedIcon
								sx={{ mr: 1, fontSize: 40 }}
							/>
						</IconButton>
						NomNom
					</Typography>
					<div className={classes.button}>
						<Button
							variant="outlined"
							color="inherit"
							onClick={handleLogout}
						>
							logout
						</Button>

						{location.pathname !== "/menuForm" && (
						<Button
							variant="outlined"
							color="inherit"
							onClick={() => navigate("/menuForm")}   
						>
						Add Menu Item
						</Button>
						)}
						{" "}
						{location.pathname !== "/restaurantProfileEdit" && (
						<Button
							variant="outlined"
							color="inherit"
							onClick={() => navigate("/restaurantProfileEdit")}
						>
							Edit Profile Info
						</Button>
						)}
						{" "}
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
