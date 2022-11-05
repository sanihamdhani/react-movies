import React, { useEffect, useState } from "react";
import axios from "axios";
import Popular from "./Popular";
import "../styles/styles.css";
import { List } from "@mui/material";
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
    <List className="lis">
      <h1>MOVIES TOP RATED</h1>

      <Popular />
      <h1>MOVIES YOU MUST WATCH</h1>
      <Grid className="list">
        {list.map((lis, index) => {
          return (
            <Grid whiteSpace="nowrap">
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
    </List>
  );
};

export default ListMovies;
