import React from "react";
import GameList from "../gameList";
import { Grid } from "@nextui-org/react";

function GameListPageTemplate({ games }) {
  return (
    <div className="GameListPageTemplate">   
          <Grid.Container gap={2} >    
              <GameList games={games}></GameList>   
          </Grid.Container>
   
    </div>
  );
}
export default GameListPageTemplate;