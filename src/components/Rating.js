import * as React from "react";

import Rating from "@mui/material/Rating";
import { Stack } from "@mui/material";

export default function BasicRating(props) {
  return (
    <Stack spacing={1} sx={{ mt: 0.5 }}>
      <Rating
        name="half-rating-read"
        value={props.vote}
        precision={0.5}
        readOnly
        max={1}
      />
    </Stack>
  );
}
