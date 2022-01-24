import React, { useEffect, useState } from "react";

export default function OrderPage() {

  const[orders, setOrders] = useState([]); 

useEffect(() =>{
     fetch("/orders")
     .then((res) => res.json())
    .then((data) => setOrders(data));

},[])

console.log(orders)
   return <div>your order has been placed</div>;
}
