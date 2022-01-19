import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import image from '../Images/restaurant_image.png'
import { useNavigate } from 'react-router-dom';

export default function RestaurantCard({id,name,restaurant_address,website,image_url,hours,description,category,setSelectedRestaurant}) {
  const navigate = useNavigate();

  function handleClick(e){
   setSelectedRestaurant(e.target.value)
   navigate('/menuPage')
  }

  return (
    <Card sx={{ maxWidth: 250}}align='center' style={{ color: '#2E3B55' }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      <CardMedia
        component="img"
        image={image}
        alt="restaurant"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          no description
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {hours}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {website}
        </Typography>
      </CardContent>
      <CardActions>
      <Button style={{ color: '#2E3B55' }} value={id} onClick={handleClick} align='center'>View Menu</Button>
      </CardActions>
    </Card>
  );
}
