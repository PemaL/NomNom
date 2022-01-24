import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
      maxHeight: 150,
      marginLeft: 90,
      borderRadius: 14,
    },
    media: {
      paddingTop: 5,
    },
    cardActions: {
      display: "flex",
      justifyContent: "flex-end",
    },
    cardContent: {
      display: "flex",
      justifyContent: "space-between",
    },
    button: {
      background: "#2E3B55",
      size: "small",
      borderRadius: 14,
    },
  }));
  

function CartItem({item}) {
    const classes = useStyles(); 
  return(
<Card className={classes.root}>
      <CardMedia className={classes.media} title={item.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {item.name}
          </Typography>
          <Typography variant="h5">${item.price}</Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Button
          variant="contained"
          className={classes.button}
        >
        {" "}
        {" "}
         +
        </Button>
        <Typography>{item.quantity}</Typography>
        <Button
          variant="contained"
          className={classes.button}
        >
        {" "}
        {" "}
         -
        </Button>
      </CardActions>
    </Card>

  )
}

export default CartItem;
