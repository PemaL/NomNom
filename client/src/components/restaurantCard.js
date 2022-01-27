import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import image from "../Images/restaurant_image.png";
import { useNavigate } from "react-router-dom";

export default function RestaurantCard({
  id,
  name,
  website,
  hours,
  phone_number,
  setSelectedRestaurant,
  selectedRestaurant,
}) {
  const navigate = useNavigate();

  function handleClick(e) {
    setSelectedRestaurant({
      ...selectedRestaurant,
      id: e.target.id,
      name: e.target.value,
    });
    navigate("/menuPage");
  }
  return (
    <Card sx={{ maxWidth: 250 }} align="center" style={{ color: "#2E3B55", borderRadius: 7 }}>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <CardMedia component="img" image={image} alt="restaurant" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Hours: {hours}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone Number: {phone_number}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Website: {website}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          style={{ color: "#2E3B55" }}
          id={id}
          value={name}
          onClick={handleClick}
          align="center"
        >
          View Menu
        </Button>
      </CardActions>
    </Card>
  );
}
