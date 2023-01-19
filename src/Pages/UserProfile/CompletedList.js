import React, { useState, useEffect } from "react";
import { auth, db } from "../../Firebase/firebase";
import { collection, getDocs, doc, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { onAuthStateChanged } from "firebase/auth"
import Game from "../../Components/FavouriteGame/FavouriteGame"
import './UserProfile.css'
import NavBar from "../../Components/Navbar/Navbar"
import { Grid } from "@nextui-org/react";

const CompletedList = () => {

  const [favourites, setFavourites] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    const playingRef = collection(db, "users/" + user?.uid + "/favourites");
    const q = query(playingRef, where("Status", "==", "Completed"));
    const getFavourites = async () =>{
      const data = await getDocs(q)
      setFavourites(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getFavourites()
  }, [user?.uid]);

  return (
    <div className="CompletedList">
      <NavBar />
      <Grid.Container gap={1}>
        {favourites.map(fav => {
          return (
            <Grid xs={12} sm={6} md={6} lg={6} xl={6} key={fav.game.id}>
              <Game
                key={fav.game.id} game={fav.game} rating={fav.Rating} status={fav.Status} id={fav.game.id} />
            </Grid>
          )
        })}
      </Grid.Container>
    </div>
  )
};

export default CompletedList;