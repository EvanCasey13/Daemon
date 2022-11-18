import React, { useState, useEffect } from "react";
import { auth, db } from "../../Firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth"
import Game from "../../Components/FavouriteGame/FavouriteGame"
import Grid from "@mui/material/Grid";
import './UserProfile.css'

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
  }, [])

  return (
    <div className="PlayingList">
    {favourites.map(fav => {
      console.log(favourites)
      return (
        <Grid container spacing={1} sx={{ padding: "5px" }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Game
              key={fav.game.id} game={fav.game} rating={fav.Rating} status={fav.Status} id={fav.game.id}/>          
          </Grid>
        </Grid>
      )
    })
}</div>
)  
};

export default PlayingList;