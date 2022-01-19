import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function MenuCard({id,name,description,price,restaurantId}) {


  return (
    <Card sx={{ maxWidth: 250}}align='center' style={{ color: '#2E3B55' }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {price}
        </Typography>
      </CardContent>
    </Card>
  );
}
