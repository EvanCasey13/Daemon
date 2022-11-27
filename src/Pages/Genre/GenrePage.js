import React, { useState, useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import { Navigate } from 'react-router-dom';
import { fetchPopularByGenre } from "../../api/rawg-api";
import AuthContext from "../../AuthContext";
import PageTemplate from '../../Components/gameListPage';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import NavBar from "../../Components/Navbar/Navbar"

function GenrePage() {
  const {name} = useParams();
  console.log(name)

    const { user } = useContext(AuthContext);

    const { data, error, isLoading, isError } = useQuery(['genres/', name],() => fetchPopularByGenre(name))

    if (isLoading) {
        return <h1>Games loading...</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const games = data.results;
console.log(games)
    if (!user) {
        return <Navigate replace to="/login" />;
    }

    return (
        <div className='Genre' >
      <NavBar />
          <PageTemplate games={games}/>
        </div>
    )
};

export default GenrePage;