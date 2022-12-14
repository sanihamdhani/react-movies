import { Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/styles.css";
import StarIcon from "@mui/icons-material/Star";
import BasicModal from "./DetailMovie";
import Cast from "./Cast";
import { Card } from "@mui/material";
const DevDetail = () => {
  const [list, setList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getData(id);
  }, [id]);

  const getData = (id) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/${id}`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((res) => {
        setList(res.data);
      });
  };

  return (
    <Container className="detailMovie">
      <Card>
        <Grid container rowSpacing={1}>
          <Grid sm={6}>
            <img
              src={`${process.env.REACT_APP_IMG_URL}/${list.poster_path}`}
              alt="movies-detail"
            ></img>
          </Grid>
          <Grid sm={6} sx={{ mt: 10 }}>
            <h1>{list.title}</h1>
            <p>{list.overview}</p>
            <p>{list.gendres}</p>

            <section>
              <StarIcon sx={{ color: "#FDCC0D", mt: 1.5 }} />
              <p>{Math.floor(list.vote_average).toFixed(1)}</p>
            </section>

            <BasicModal poster={list.poster_path} />
          </Grid>
        </Grid>
      </Card>
      <Cast />
    </Container>
  );
};

export default DevDetail;
