import React from "react";
import MenuCard from "./menuCard";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import { getNativeSelectUtilityClasses } from "@mui/material";

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

export default function MenuPage({ selectedRestaurant, handleAddToCart }) {
	const [allMenus, setAllMenus] = useState([]);
	const classes = useStyles();

	useEffect(() => {
		const route = `restaurants/${selectedRestaurant.id}`;
		fetch(route)
			.then((res) => res.json())
			.then((data) => {
				setAllMenus(data.menus);
			});
	}, []);

	return (
		<main className={classes.appBar}>
		<Container maxWidth="sm">
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="#FFFFFF"
						gutterBottom
					>
						{selectedRestaurant.name}
					</Typography>
					<Typography
						variant="h5"
						align="center"
						color="#FFFFFF"
						paragraph
					>
						{selectedRestaurant.description? <p> {selectedRestaurant.description} </p> : <p> Minimalist hangout with late hours providing Korean BBQ & other plates along with beer, wine & soju. </p>}
					</Typography>
				</Container>
				<Container sx={{ maxWidth: 350, maxHeight: 40 }}>
			<Grid container spacing={10}>
				{allMenus.map((menu) => {
					return (
						<Grid item key={menu.id} md={4}>
							<MenuCard
								menu={menu}
								handleAddToCart={handleAddToCart}
							/>
						</Grid>
					);
				})}
			</Grid>
			</Container>
		</main>
	);
}