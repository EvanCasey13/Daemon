import React from "react";
import Platform from "./Platforms";
import Grid from "@mui/material/Grid";

const PlatformList = ({ platforms }) => {
  let platformCards = platforms?.map((p) => (
    <Grid key={p.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Platform key={p.id} platforms={p} />
    </Grid>
  ));
  return platformCards;
};

export default PlatformList;