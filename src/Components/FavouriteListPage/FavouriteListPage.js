import React from "react";
import FavouriteList from "../FavouriteList/FavouriteList";
import { Grid } from "@nextui-org/react";

function FavouritesListPage({ favourites }) {
  return (
    <div className="GameListPageTemplate">   
          <Grid.Container gap={2} >    
              <FavouriteList favourites={favourites} />   
          </Grid.Container>
   
    </div>
  );
}
export default FavouritesListPage;