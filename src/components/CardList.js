import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicRating from "./Rating";
import { Link } from "react-router-dom";

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345, width: "200px" }}>
      <CardMedia
        component="img"
        height="200"
        image={`${process.env.REACT_APP_IMG_URL}/${props.poster}`}
        alt="Poster"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <span>
          <BasicRating vote={props.vote} />
          <Typography gutterBottom variant="h6" component="div">
            {props.vote}
          </Typography>
        </span>
      </CardContent>
      <CardActions>
        <Link to={`/detail/${props.id}`} style={{ textDecoration: "none" }}>
          <Button size="small">Detail</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
