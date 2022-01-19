import React from "react";
import Grid from '@mui/material/Grid';

import RestaurantCard from './restaurantCard'

function RestaurantPage({allRestaurants,setSelectedRestaurant}) {
    
   
  return (
    <div>
      <Grid container spacing={8}>
      {allRestaurants.map((restaurant) => {
        return (
            <Grid item xs={2} mt={8} ml={6} >
            <RestaurantCard
              id={restaurant.id}
              key={restaurant.id}
              name={restaurant.name}
              website={restaurant.website}
              image={restaurant.image_url}
              hours={restaurant.hours}
              description={restaurant.description}
              setSelectedRestaurant={setSelectedRestaurant}
            />
            </Grid>
        );
      })}
      </Grid>
    
    </div>
  );
}

export default RestaurantPage;