import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicRating from "./Rating";
import { Link } from "react-router-dom";

export default function Test() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/top_rated`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((res) => {
        console.log(res.data.results);
        setPopular(res.data.results);
      });
  };
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ sm: 1, lg: 1 }}
      justifyContent="center"
      className="popular"
    >
      {popular.map((pop) => {
        return (
          <Grid
            item
            xs={12}
            md={3}
            lg={2}
            sm={6}
            whiteSpace="nowrap"
            sx={{ m: 1 }}
          >
            <Card sx={{ maxWidth: 345, width: "250px" }} key={pop.id}>
              <CardMedia
                component="img"
                height="200"
                image={`${process.env.REACT_APP_IMG_URL}/${pop.poster_path}`}
                alt="Poster"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {pop.title}
                </Typography>
                <span>
                  <BasicRating vote={pop.vote_average} />
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ ml: 0.5 }}
                  >
                    {pop.vote_average}
                  </Typography>
                </span>
              </CardContent>
              <CardActions>
                <Link
                  to={`/detail/${pop.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button size="small">Detail</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
