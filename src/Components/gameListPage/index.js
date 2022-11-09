import React from "react";
import GameList from "../gameList";
import Grid from "@mui/material/Grid";

function GameListPageTemplate({ games, action }) {

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
      </Grid>
      <Grid item container spacing={5}>
        <GameList action={action} games={games}></GameList>
      </Grid>
    </Grid>
  );
}
export default GameListPageTemplate;