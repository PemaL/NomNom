import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";

import image from "../Images/food.png";

const useStyles = makeStyles(() => ({
	root: {
		maxHeight: 200,
		marginLeft: 90,
		borderRadius: 14,
		display: "flex",
	},
	// media: {
	// 	paddingTop: 5,
	// },
	cardActions: {
		display: "flex",
		justifyContent: "space-between",
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
	},
	media: {
		maxWidth: 250,
		maxHeight: 250,
	},
	div: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
	},
}));

function CartItem({ item, handleAddToCart, handleRemoveFromCart }) {
	const classes = useStyles();
	console.log(item);
	return (
		<Card className={classes.root}>
			{item.image ? (
				<CardMedia
					className={classes.media}
					component="img"
					image={item.image}
					alt="restaurant"
				/>
			) : (
				<CardMedia
					className={classes.media}
					component="img"
					image={image}
					alt="restaurant"
				/>
			)}

			<div className={classes.div}>
				<CardContent>
					<div className={classes.cardContent}>
						<Typography variant="h5" gutterBottom>
							{item.name}
						</Typography>
						<Typography variant="h5">${item.price}</Typography>
					</div>
				</CardContent>
				<CardActions className={classes.cardActions}>
					<Button
						variant="contained"
						className={classes.button}
						onClick={() => handleAddToCart(item)}
					>
						{" "}
						+{" "}
					</Button>
					<Typography>{item.quantity}</Typography>{" "}
					<Button
						variant="contained"
						className={classes.button}
						onClick={() => handleRemoveFromCart(item)}
					>
						{" "}
						-{" "}
					</Button>
				</CardActions>
			</div>
		</Card>
	);
}

export default CartItem;
