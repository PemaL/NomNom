import React from "react";
import MenuCard from "./menuCard";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";

export default function MenuPage({ selectedRestaurant, handleAddToCart }) {
	const [allMenus, setAllMenus] = useState([]);
	useEffect(() => {
		const route = `restaurants/${selectedRestaurant.id}`;
		fetch(route)
			.then((res) => res.json())
			.then((data) => {
				setAllMenus(data.menus);
			});
	}, []);

	return (
		<div style={{ background: "#2E3B55" }}>
			<Typography
				gutterBottom
				variant="h5"
				align="center"
				style={{ color: "#FFFFFF" }}
				component="div"
			>
				{selectedRestaurant.name} Menu
			</Typography>
			<Grid container spacing={1} sx={{ width: "120%", ml: 10 }}>
				{allMenus.map((menu) => {
					return (
						<Grid item key={menu.id} xs={8} mt={5}>
							<MenuCard
								menu={menu}
								handleAddToCart={handleAddToCart}
							/>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
}