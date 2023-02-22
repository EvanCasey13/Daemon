import React from "react";
import FavouriteGame from "../FavouriteGame/FavouriteGame";
import { Grid } from "@nextui-org/react";

const FavouriteList = ({ favourites }) => {

 let favouriteCards = favourites?.map((f) => (
    <Grid key={f.id} xs={10} sm={8} md={6} xl={4}>
      <FavouriteGame key={f.game.id} game={f.game} rating={f.Rating} status={f.Status} id={f.game.id} userUID={f.userUID} />
    </Grid>
  )); 
  return favouriteCards;
};

export default FavouriteList;