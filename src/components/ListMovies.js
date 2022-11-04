import React, { useEffect, useState } from "react";
import axios from "axios";

import "../styles/styles.css";
import { Container } from "@mui/material";
import MediaCard from "./CardList";
import { Grid } from "@mui/material";

const ListMovies = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((res) => {
        console.log(res.data);
        setList(res.data.results);
      })
      .catch((error) => {
        console.log(error.res.data);
      });
  }, []);

  return (
    <Container className="list">
      <h1>MOVIES YOU MUST WATCH</h1>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {list.map((lis, index) => {
          return (
            <Grid
              item
              xs={2}
              sm={2}
              md={2}
              key={index}
              sx={{ ml: 3 }}
              justifyContent="center"
              whiteSpace="nowrap"
            >
              <MediaCard
                key={index}
                title={lis.title}
                poster={lis.poster_path}
                vote={lis.vote_average}
                overview={lis.overview}
                release={lis.release_date}
                id={lis.id}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ListMovies;
