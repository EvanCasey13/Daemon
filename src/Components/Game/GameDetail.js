import React from 'react';
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Text } from "@nextui-org/react";
import "./Game.css"

const GameDetail = ({ game }) => {
  return (
    <div className="gameDetailsPage">
      <Grid container spacing={1}>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
          <ImageList
            cols={1}>
            <Text h2>
              {game.name}
            </Text>
            <ImageListItem cols={1}>
              <img
                src={game.background_image}
                alt="game_image"
              />
            </ImageListItem>
          </ImageList>
        </Grid>
        <Text css={{paddingLeft:"2%"}}>
          {game.description_raw}
        </Text>
      </Grid>
    </div>

  )
};

export default GameDetail;