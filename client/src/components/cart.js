import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import CartItem from "./cartItem";

const useStyles = makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	title: {
		marginTop: "5%",
		position: "center",
		color: "#FFFFFF",
	},
	emptyButton: {
		minWidth: "150px",
		[theme.breakpoints.down("xs")]: {
			marginBottom: "5px",
		},
		[theme.breakpoints.up("xs")]: {
			marginRight: "20px",
		},
		background: "#2E3B55",
		borderRadius: 14,
	},
	checkoutButton: {
		minWidth: "150px",
		background: "#2E3B55",
		borderRadius: 14,
	},
	link: {
		textDecoration: "none",
	},
	cardDetails: {
		display: "flex",
		marginTop: "10%",
		color: "#FFFFFF",
		width: "100%",
		justifyContent: "space-between",
	},
}));

export default function Cart({
	cartItems,
	clearCart,
	currentUser,
	handleAddToCart,
	handleRemoveFromCart,
}) {
	const classes = useStyles();
	const navigate = useNavigate();
	const menu_items = cartItems.map((item) => {
		return {
			menu_id: item.id,
			price: item.price,
			quantity: item.quantity,
		};
	});

	const totalPrice = cartItems.reduce((price, item) => price + item.price, 0);

	function handlePost() {
		fetch("/order", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ menu_items, customer_id: currentUser.id }),
		})
			.then((res) => res.json())
			.then(() => {
				clearCart();
				alert("Your order has been placed");
				navigate("/");
			});
	}

	let addedItems = cartItems.length ? (
		cartItems.map((item) => {
			return (
				<>
					<Grid spacing={1} sx={{ width: "150%", ml: 25, mt: 5 }}>
						<Grid item xs={12} sm={4} key={item.id}>
							<CartItem
								item={item}
								handleRemoveFromCart={handleRemoveFromCart}
								handleAddToCart={handleAddToCart}
							/>
						</Grid>
					</Grid>
				</>
			);
		})
	) : (
		<Typography variant="subtitle1" className={classes.cardDetails}>
			<Button color="inherit" onClick={() => navigate("/")}>
				{" "}
				Add some items!{" "}
			</Button>
		</Typography>
	);

	return (
		<Container>
			<div className={classes.toolbar}>
				<Typography className={classes.title} variant="h3">
					{" "}
					Your Food Bag
				</Typography>
				{addedItems}
			</div>
			<div className={classes.cardDetails}>
				<Typography variant="h4">Subtotal: ${totalPrice}</Typography>
				<div>
					<Button
						variant="outlined"
						color="inherit"
						className={classes.emptyButton}
						type="button"
						onClick={clearCart}
					>
						{" "}
						Empty Cart
					</Button>
					<Button
						variant="outlined"
						color="inherit"
						className={classes.checkoutButton}
						type="button"
						onClick={handlePost}
					>
						{" "}
						Check out
					</Button>
				</div>
			</div>
		</Container>
	);
}
