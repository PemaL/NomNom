import React from "react";
import Grid from "@mui/material/Grid";

import RestaurantCard from "./restaurantCard";

function RestaurantPage({
  allRestaurants,
  setSelectedRestaurant,
  selectedRestaurant,
}) {
  return (
    <div>
      <Grid container spacing={1}>
        {allRestaurants.map((restaurant) => {
          return (
            <Grid item xs={3} mt={8} ml={15}>
              <RestaurantCard
                id={restaurant.id}
                key={restaurant.id}
                name={restaurant.name}
                website={restaurant.website}
                image={restaurant.image_url}
                hours={restaurant.hours}
                phone_number={restaurant.phone_number}
                description={restaurant.description}
                setSelectedRestaurant={setSelectedRestaurant}
                selectedRestaurant={selectedRestaurant}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default RestaurantPage;
