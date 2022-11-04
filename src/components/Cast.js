import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { List } from "@mui/material";
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
    <List className="cast">
      {cast.map((cas) => {
        return (
          <div key={cas.id}>
            {cas.profile_path ? (
              <img
                src={`${process.env.REACT_APP_IMG_URL}/${cas.profile_path}`}
                height="1000"
                alt="Actor poster"
              ></img>
            ) : (
              <img src={person} alt="Actor poster"></img>
            )}

            <p>{cas.name}</p>
          </div>
        );
      })}
    </List>
  );
};

export default Cast;
