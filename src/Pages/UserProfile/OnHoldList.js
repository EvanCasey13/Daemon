import React, { useState, useEffect } from "react";
import { auth, db } from "../../Firebase/firebase";
import { collection, getDocs, doc, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import './UserProfile.css'
import NavBar from "../../Components/Navbar/Navbar"
import FavouritesList from "../../Components/FavouriteListPage/FavouriteListPage";

const OnHoldList = () => {

  const [favourites, setFavourites] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    const playingRef = collection(db, "users/" + user?.uid + "/favourites");
    const q = query(playingRef, where("Status", "==", "On-hold"));
    const getFavourites = async () => {
      const data = await getDocs(q)
      setFavourites(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getFavourites()
  }, [user?.uid]);

  return (
    <div className="OnHoldList">
      <NavBar />
      <FavouritesList favourites={favourites} />
    </div>
  )
};

export default OnHoldList;