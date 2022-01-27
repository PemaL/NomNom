import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	body: {
		backgroundColor: "#2E3B55",
	},
	button: {
		marginLeft: "auto",
		margin: 20,
		borderRadius: 14,
	},
}));

export default function MenuForm({
	currentRestaurant
}) {

	const classes = useStyles();
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState(null);

	const handleSignIn = (e) => {
		e.preventDefault();

    const formData = new FormData()
    formData.append('name', name )
    formData.append('description', description)
    formData.append('price', price)
    formData.append('image', image)
    formData.append('restaurant_id', currentRestaurant.id)

		fetch("/menus", {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then(() => {
				alert("Added menu");
				navigate("/");
			});
	};

	return (
		<div className={classes.body}>
			<Container
				component="main"
				maxWidth="xs"
				style={{ background: "#FFFFFF" }}
			>
				<Box
					sx={{
						marginTop: 8,
						padding: 10,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Typography component="h1" variant="h5">
						Create a New Item
					</Typography>
					<Box
						component="form"
						onSubmit={handleSignIn}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							id="name"
							label="Food name"
							name="name"
							autoComplete="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							autoFocus
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							id="description"
							label="Description"
							name="description"
							autoComplete="description"
              value={description}
							onChange={(e) => setDescription(e.target.value)}
							autoFocus
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							type="number"
							id="price"
							label="Price"
							name="price"
							autoComplete="price"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							autoFocus
						/>
						<Button variant="contained" component="label" style={{ background: "#2E3B55" }} >
							<input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])}/>
						</Button>

						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 5, mb: 2 }}
							style={{ background: "#2E3B55" }}
						>
							Create a Menu Item
						</Button>
					</Box>
				</Box>
			</Container>
		</div>
	);
}
