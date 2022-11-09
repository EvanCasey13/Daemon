import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import './GameHomepage.css';
import Pagination from '@mui/material/Pagination';
import PageTemplate from '../../Components/gameListPage';
import { useQuery } from 'react-query';
import { fetchPopular } from "../../api/rawg-api";
import AuthContext from "../../AuthContext";

function GameHomepage() {

    const { user } = useContext(AuthContext);

    const [activePage, setActivePage] = useState(1);

    const handleChange = (event, value) => {
        setActivePage(value);
        console.log(value)
    };

    const { data, error, isLoading, isError } = useQuery(['games', activePage], () => fetchPopular(activePage), { keepPreviousData: true })

    if (isLoading) {
        return <h1>Games loading...</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const games = data.results;

    if (!user) {
        return <Navigate replace to="/login" />;
    }

    return (
        <div className='Home' >
            <h2>Popular Games</h2>
            <PageTemplate   
            games={games}
            />
              <Pagination
        count='100'
        variant='outlined'
        color='primary'
        shape="rounded"
        showFirstButton 
        showLastButton
        className='pagination'
        page={activePage}
        onChange={handleChange}
      />
        </div>
    )
}

export default GameHomepage;