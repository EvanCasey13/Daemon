import React, { useState, useEffect } from "react";
import { auth, db } from "../../Firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth"
import Game from "../../Components/FavouriteGame/FavouriteGame"
import './UserProfile.css'
import NavBar from "../../Components/Navbar/Navbar"
import { Grid } from "@nextui-org/react";

const PlayingList = () => {

  const [favourites, setFavourites] = useState([])

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        let getFavourites = await getDocs(collection(db, "users/" + user.uid + "/favourites"))
        setFavourites(getFavourites.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        })))
      }
    });
  }, [favourites])

  return (
    <div className="PlayingList">
      <NavBar />
      <Grid.Container gap={1} justify="flex-start">
        {favourites.map(fav => {
          return (
            <Grid xs={6} sm={3} key={fav.game.id}>
              <Game
                key={fav.game.id} game={fav.game} rating={fav.Rating} status={fav.Status} id={fav.game.id} />
            </Grid>
          )
        })}
      </Grid.Container>
    </div>
  )
};

export default PlayingList;