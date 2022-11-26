import React, { useState, useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import './Home.css';
import { Navigate } from 'react-router-dom';
import { fetchPopularHome } from "../../api/rawg-api";
import AuthContext from "../../AuthContext";
import PageTemplate from '../../Components/gameListPage';
import { useQuery } from 'react-query';

function Home() {

    const { user } = useContext(AuthContext);

    const [activePage, setActivePage] = useState(1);

    const handleChange = (event, value) => {
        setActivePage(value);
        console.log(value)
    };

    const { data, error, isLoading, isError } = useQuery(['home/games', activePage], () => fetchPopularHome(activePage), { keepPreviousData: true })

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
};

export default Home;