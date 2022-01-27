import * as React from "react";
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Row({order, orderDetails}) {
 
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' }}}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {order.id}
        </TableCell>
        <TableCell align="right">{order.created_at}</TableCell>
        {/* <TableCell align="right">{order.customer_id}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Order Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Item Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Sub total($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orderDetails.map((orderDetail) => (
                    <TableRow key={orderDetail.menu.name}>
                      <TableCell component="th" scope="row">
                      {orderDetail.menu.name}
                      </TableCell>
                      <TableCell>{orderDetail.price}</TableCell>
                      <TableCell align="right">{orderDetail.quantity}</TableCell>
                      <TableCell align="right">
                        {Math.round(orderDetail.price * orderDetail.quantity)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function OrderPage({currentUser}) {
	const [orders, setOrders] = useState([]);
	const [orderDetails, setOrderDetails] = useState([]);

	useEffect(() => {
		fetch(`/orders/${currentUser.id}`)
			.then((res) => res.json())
			.then((data) => {
				setOrders(data);
				setOrderDetails(data.order_details);
			});
	},[]);

  console.log(orders)
	return(

    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Order Number</TableCell>
            <TableCell align="right">Created At</TableCell>
            {/* <TableCell align="right">Total</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <Row key={order.id} order={order} orderDetails={order.order_details} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
