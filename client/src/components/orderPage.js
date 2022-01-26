import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function OrderPage({currentUser}) {

  const[orders, setOrders] = useState([]); 

useEffect(() =>{
     fetch(`/orders/${currentUser.id}`)
     .then((res) => res.json())
    .then((data) => setOrders(data));

},[])

console.log(orders)

return(
  <p>Order page </p> 
)

}