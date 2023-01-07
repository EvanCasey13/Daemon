import React from "react";
import Game from "../Game/Game";
import { Grid } from "@nextui-org/react";

const GameList = ({ games }) => {

 let gameCards = games?.map((g) => (
    <Grid key={g.id} xs={6} sm={4} md={4} lg={2} xl={2} css={{ padding:"1%"}}>
      <Game key={g.id} game={g} />
    </Grid>
  )); 
  return gameCards;
};

export default GameList;