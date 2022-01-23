import * as React from "react";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import { useState, useEffect } from "react";
import RestaurantPage from "./restaurantPage";

export default function LandingPage({
  setSelectedRestaurant,
  selectedRestaurant,
}) {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/restaurants")
      .then((res) => res.json())
      .then((data) => setAllRestaurants(data));
  }, []);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  let searchedRestaurants = allRestaurants.filter((res) =>
    res.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ background: "#2E3B55" }}>
      <CssBaseline />
      <TextField
        id="outlined-basic"
        value={search}
        label="Search restaurants"
        onChange={handleChange}
        style={{ background: "#FFFFFF", color: "#2E3B55" }}
        variant="filled"
        sx={{ mt: 2, ml: 30, width: 800 }}
      />
      <RestaurantPage
        allRestaurants={searchedRestaurants}
        setSelectedRestaurant={setSelectedRestaurant}
        selectedRestaurant={selectedRestaurant}
      />
    </div>
  );
}
