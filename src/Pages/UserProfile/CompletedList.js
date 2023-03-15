import React, { useState, useEffect } from "react";
import { db } from "../../Firebase/firebase";
import { collection, getDocs, query, where, onSnapshot } from "firebase/firestore";
import { useParams, useLocation, Link } from "react-router-dom";
import './UserProfile.css'
import NavBar from "../../Components/Navbar/Navbar"
import FavouritesList from "../../Components/FavouriteListPage/FavouriteListPage";
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const CompletedList = () => {

  const [user, setUser] = useState([]);
  const [favourites, setFavourites] = useState([]);
  let params = useParams();
  const breadcrumbs = useBreadcrumbs();
  const location = useLocation();

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
    const q = query(playingRef, where("Status", "==", "Completed"));
    const getFavourites = async () => {
      onSnapshot(q, (data) => {
        setFavourites(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      })
    }
    getFavourites()
  }, [params.id]);

  return (
    <div className="CompletedList">
      <NavBar />
      <nav>
        <Link to="/"
          className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
        >
          Home/
        </Link>
        <Link to="/"
          className={location.pathname.startsWith("/completed") ? "breadcrumb-active" : "breadcrumb-not-active"}
        >
          Completed/{params.id}
        </Link>
      </nav>
      <FavouritesList favourites={favourites} />
    </div>
  )
};

export default CompletedList;