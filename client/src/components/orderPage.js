import React, { useEffect, useState } from "react";



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