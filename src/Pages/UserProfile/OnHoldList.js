import React, { useState, useEffect } from "react";
import { db } from "../../Firebase/firebase";
import { collection, getDocs, query, where, onSnapshot } from "firebase/firestore";
import { useParams } from "react-router-dom";
import './UserProfile.css'
import NavBar from "../../Components/Navbar/Navbar"
import FavouritesList from "../../Components/FavouriteListPage/FavouriteListPage";

const OnHoldList = () => {

  const [user, setUser] = useState([]);
  const [favourites, setFavourites] = useState([]);
  let params = useParams();

  useEffect(() => {
    const d = query(collection(db, "users"), where("uid", "==", params.id));
    const getUser = async () => {
      const data = await getDocs(d)
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getUser()
  }, [params.id]);

  useEffect(() => {
    const playingRef = collection(db, "users/" + params.id + "/favourites");
    const q = query(playingRef, where("Status", "==", "On-hold"));
    const getFavourites = async () => {
      onSnapshot(q, (data) => {
        setFavourites(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      })
    }
    getFavourites()
  }, [params.id]);

  return (
    <div className="OnHoldList">
      <NavBar />
      <FavouritesList favourites={favourites} />
    </div>
  )
};

export default OnHoldList;