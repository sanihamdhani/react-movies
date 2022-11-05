import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Card, CardContent } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ReactPlayer from "react-player";
import axios from "axios";
import { useParams } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  p: 4,
  display: "flex",
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const youtubeUrl = "https://www.youtube.com/watch?v=";
  const [video, setVideo] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    getVideo(id);
  }, [id]);

  const getVideo = (id) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/${id}/videos`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((res) => {
        console.log(res.data.results);
        setVideo(res.data.results[0]);
      });
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ p: 1, borderRadius: 8, width: "150px", mt: 1, mb: 3 }}
      >
        Trailer <PlayCircleOutlineIcon sx={{ ml: 1 }} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <ReactPlayer url={youtubeUrl + video.key} />
            </CardContent>
          </Box>
        </Card>
      </Modal>
    </div>
  );
}
