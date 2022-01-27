import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(
	() => ({
		appBar: {
			backgroundColor: "#2E3B55",
		},
		button: {
			marginLeft: "auto",
			borderRadius: 14,
			color: "#FFFFFF",
		},
	}),
	{}
);

export default function RestaurantLanding({ currentRestaurant }) {
	const classes = useStyles();
	const [myMenu, setMyMenu] = useState([]);
	const navigate = useNavigate();
  const [update, setUpdate] = useState(false)

	useEffect(() => {
		const route = `restaurants/${currentRestaurant.id}`;
		fetch(route)
			.then((res) => res.json())
			.then((data) => {
				setMyMenu(data.menus);
			});
	}, [update]);

	function handleDelete(menu) {
		fetch(`/menus/${menu.id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then(() => setUpdate(!update));
	}

	return (
		<>
			<main className={classes.appBar}>
				<Container maxWidth="sm">
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="#FFFFFF"
						gutterBottom
					>
						{currentRestaurant.name}
					</Typography>
					<Typography
						variant="h5"
						align="center"
						color="#FFFFFF"
						paragraph
					>
						{currentRestaurant.description}
					</Typography>
				</Container>

				<Container sx={{ maxWidth: 250, maxHeight: 40 }}>
					{/* End hero unit */}
					<Grid container spacing={4}>
						{myMenu.map((menu) => (
							<Grid item key={menu} xs={12} sm={6} md={4}>
								<Card
									sx={{
										height: "70%",
										display: "flex",
										flexDirection: "column",
										mt: 10,
									}}
								>
									<CardMedia
										component="img"
										image={menu.image}
                    sx={{
                      height: "50%",
                    }}
                    style={{color:"#2E3B55"}}
									/>
									<CardContent sx={{ flexGrow: 1,height: "50%" }}>
										<Typography
											gutterBottom
											variant="h6"
											component="h2"
                      align="center"
										>
											{menu.name}
										</Typography>
										<Typography>
											{menu.description}
										</Typography>
										<Typography sx={{ mt: 3 }}>
											Price: ${menu.price}
										</Typography>
									</CardContent>
									<CardActions sx={{ mt: -10}}>
										<Button variant="outlined" size="small" color="inherit" >
											Edit
										</Button>
										<Button
											variant="outlined"
											onClick={() => handleDelete(menu)}
											size="small"
                      color="inherit" 
										>
											Delete
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
		</>
	);
}
