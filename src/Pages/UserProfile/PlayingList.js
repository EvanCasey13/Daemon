import React, { useState, useEffect } from "react";
import { auth, db } from "../../Firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth"
import Game from "../../Components/Game/Game"

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
  favourites.map(fav => {
    console.log(favourites)
    return (
        <Game 
        key={fav.game.id} game={fav.game}/>
    )
  })
    )
};

export default PlayingList;