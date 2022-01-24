import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardMedia from "@mui/material/CardMedia";
import { CardActions } from "@material-ui/core";
import { makeStyles } from "@mui/styles";


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

export default function MenuCard({ menu,handleAddToCart}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} title={menu.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {menu.name}
          </Typography>
          <Typography variant="h5">${menu.price}</Typography>
        </div>
        <Typography variant="" color="textSecondary">
          {menu.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Button
          variant="contained"
          className={classes.button}
          endIcon={<AddCircleIcon />}
          onClick={() => handleAddToCart(menu)}
        >
          Add to bag
        </Button>
      </CardActions>
    </Card>
  );
}
