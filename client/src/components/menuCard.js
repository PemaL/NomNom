import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardMedia from "@mui/material/CardMedia";
import { CardActions } from "@material-ui/core";
import { makeStyles } from "@mui/styles";

import image from "../Images/food.png";
const useStyles = makeStyles(() => ({
	root: {
		maxHeight: 200,
		marginLeft: 90,
		borderRadius: 14,
		display: "flex",
		flexDirection: "column",
	},
	media: {
		paddingTop: 5,
	},
	cardActions: {
		display: "flex",
		justifyContent: "flex-end",
		marginTop: "auto",
	},
	cardContent: {
		display: "flex",
		justifyContent: "space-between",
	},
	button: {
		background: "#2E3B55",
		size: "small",
		borderRadius: 14,
		marginTop: 10,
	},
	media: {
		maxWidth: 250,
		maxHeight: 250,
	},
	div: {
		display: "flex",
		flexDirection: "column",
		maxWidth: "100%",
	},
}));

export default function MenuCard({ menu, handleAddToCart }) {
	const classes = useStyles();

	return (
		<Card
			sx={{
				height: "90%",
				display: "flex",
				flexDirection: "column",
				mt: 10,
			}}
		>
       { menu.image ? <CardMedia component="img"
				image={menu.image}
				sx={{
					height: "50%",
				}}
				style={{ color: "#2E3B55" }}
			/> : <CardMedia
      component="img"
      image={image}
      sx={{
        height: "50%",
      }}
      style={{ color: "#2E3B55" }}
    /> } 
			<CardContent sx={{ flexGrow: 1, height: "50%" }}>
				<Typography
					gutterBottom
					variant="h6"
					component="h2"
					align="center"
				>
					{menu.name}
				</Typography>
				<Typography>{menu.description}</Typography>
				<Typography sx={{ mt: 3 }}>Price: ${menu.price}</Typography>
			</CardContent>
			<CardActions sx={{ mt: -10 }}>
				<Button
					variant="outlined"
					onClick={() => handleAddToCart(menu)}
					size="small"
					color="inherit"
				>
					Add to bag
				</Button>
			</CardActions>
		</Card>
	);
}
