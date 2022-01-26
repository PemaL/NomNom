import React from 'react';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function RestaurantLanding() {
    const navigate = useNavigate(); 
   
    function handleClick(){
        navigate("/menuForm")
    }
  return <Button varaint="outlined" color="inherit" onClick={handleClick}> Add a menu</Button> 
}

