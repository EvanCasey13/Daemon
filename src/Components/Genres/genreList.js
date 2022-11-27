import React from "react";
import Genre from "./Genre";
import Grid from "@mui/material/Grid";

const GenreList = ({ genres }) => {
  let genreCards = genres?.map((g) => (
    <Grid key={g.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Genre key={g.id} genre={g} />
    </Grid>
  ));
  return genreCards;
};

export default GenreList;