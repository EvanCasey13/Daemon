import React from "react";
import FavouriteGame from "../FavouriteGame/FavouriteGame";
import { Grid } from "@nextui-org/react";

const FavouriteList = ({ favourites }) => {

 let favouriteCards = favourites?.map((f) => (
    <Grid key={f.id} xs={12} sm={6} md={6} lg={6} xl={6}>
      <FavouriteGame key={f.game.id} game={f.game} rating={f.Rating} status={f.Status} id={f.game.id} userUID={f.userUID} />
    </Grid>
  )); 
  return favouriteCards;
};

export default FavouriteList;