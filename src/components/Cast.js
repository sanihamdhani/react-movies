import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Grid, List } from "@mui/material";

import { Card, CardMedia } from "@mui/material";
import person from "../assets/person.jpg";

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getCast(id);
  }, [id]);

  const getCast = (id) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/${id}/credits`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((res) => {
        setCast(res.data.cast);
      });
  };

  return (
    <List>
      <h1>CAST</h1>
      <Grid className="list">
        {cast.map((cas) => {
          return (
            <Grid key={cas.id} textAlign="center">
              <Card sx={{ maxWidth: 345, height: "250px", width: "200px" }}>
                {cas.profile_path ? (
                  <CardMedia
                    component="img"
                    height="200"
                    image={`${process.env.REACT_APP_IMG_URL}/${cas.profile_path}`}
                    alt="Poster"
                  />
                ) : (
                  <CardMedia
                    component="img"
                    height="200"
                    image={person}
                    alt="Poster"
                  />
                )}

                <p>{cas.name}</p>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </List>
  );
};

export default Cast;
