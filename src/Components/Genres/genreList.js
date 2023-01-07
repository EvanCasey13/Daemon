import React from "react";
import Genre from "./Genre";
import { Grid } from "@nextui-org/react";

const GenreList = ({ genres }) => {
  let genreCards = genres?.map((g) => (
    <Grid key={g.id} xs={6} sm={4} md={4} lg={2} xl={2} css={{ padding:"1%"}}>
      <Genre key={g.id} genre={g} />
    </Grid>
  ));
  return genreCards;
};

export default GenreList;