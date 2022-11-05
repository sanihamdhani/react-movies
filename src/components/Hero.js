import React from "react";
import { Button, Container, Grid } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import iceAge from "../assets/iceback.jpg";
import "../styles/styles.css";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Container>
      <Grid container spacing={2} columns={16} className="hero">
        <img src={iceAge} alt=""></img>

        <Grid item sm={8}>
          <h1>ICE AGE</h1>

          <p>
            On Earth 20,000 years ago, everything was covered in ice. A group of
            friends, Manny, a mammoth, Diego, a saber tooth tiger, and Sid, a
            sloth encounter an Eskimo human baby. They must try to return the
            baby back to his tribe before a group of saber tooth tigers find him
            and eat him.
          </p>
          <h2>GENDRES</h2>
          <h2>Cartoon, Advanture</h2>
          <Button
            variant="contained"
            sx={{ p: 1, borderRadius: 8, width: "150px", mt: 1 }}
          >
            Watch <PlayCircleOutlineIcon sx={{ ml: 1 }} />
          </Button>
          <Button
            variant="contained"
            sx={{ p: 1, borderRadius: 8, width: "150px", mt: 1, ml: 1 }}
          >
            My List <PlaylistAddIcon sx={{ ml: 1 }} />
          </Button>
          <Link to="/list" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{ p: 1, borderRadius: 8, width: "150px", mt: 1, ml: 1 }}
            >
              List Movies <FormatListBulletedIcon sx={{ ml: 1 }} />
            </Button>
          </Link>
        </Grid>
        <Grid item sm={8}></Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
