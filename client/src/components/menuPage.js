import React from 'react'
import MenuCard from "./menuCard";
import Grid from '@mui/material/Grid';
import { useEffect, useState } from "react";

export default function MenuPage({selectedRestaurant}) {
    const[allMenus,setAllMenus] = useState([])

    useEffect(() => {
        const route = `restaurants/${selectedRestaurant}`
        console.log(route)
        fetch(route)
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setAllMenus(data.menus)}
            );
      }, []);

      console.log(allMenus)

    return (
      <div>
        <Grid container spacing={8}>
        {allMenus.map((menu) => {
          return (
            <Grid item xs={3} mt={2} >
            <MenuCard
              key={menu.id}
              id={menu.id}
              name={menu.name}
              description={menu.description}
              price={menu.price}
            />
            </Grid>
          );
        })}
        </Grid>
      </div>
    );
  }
