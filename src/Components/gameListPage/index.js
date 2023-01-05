import React from "react";
import GameList from "../gameList";
import Grid from "@mui/material/Grid";

function GameListPageTemplate({ games }) {
  return (
    <div className="GameListPageTemplate">   
          <Grid container sx={{ padding: '10px' }}>
            <Grid item container spacing={2}>
              <GameList games={games}></GameList>
            </Grid>
          </Grid>
   
    </div>
  );
}
export default GameListPageTemplate;