import React from "react";
import Game from "../Game/Game";
import Grid from "@mui/material/Grid";

const GameList = ({ games }) => {

 let gameCards = games?.map((g) => (
    <Grid key={g.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Game key={g.id} game={g} />
    </Grid>
  )); 
  return gameCards;
};

export default GameList;