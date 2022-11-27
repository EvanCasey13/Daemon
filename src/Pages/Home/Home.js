import React, { useState, useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import './Home.css';
import { Navigate } from 'react-router-dom';
import { fetchPopularHome, fetchGenres } from "../../api/rawg-api";
import AuthContext from "../../AuthContext";
import PageTemplate from '../../Components/gameListPage';
import GenreListPage from '../../Components/Genres/GenreListPage';
import { useQuery } from 'react-query';

function Home() {

const handleChange = (e, type, value) => {
    e.preventDefault();
    console.log((type, value));
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

    const { user } = useContext(AuthContext);

    const [activePage, setActivePage] = useState(1);

    const handlePageChange = (event, value) => {
        setActivePage(value);
        console.log(value)
    };

    const genreResults = useQuery({ queryKey: ['genres'], queryFn: fetchGenres })

    const { data, error, isLoading, isError } = useQuery(['home/games', activePage], () => fetchPopularHome(activePage), { keepPreviousData: true })

    if (isLoading) {
        return <h1>Games loading...</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const games = data.results;

    const genres = genreResults.data.results;

    if (!user) {
        return <Navigate replace to="/login" />;
    }

    return (
        <div className='Home' >
            <h2>Popular Games</h2>
            <PageTemplate
                games={games}
            />
<GenreListPage genres={genres} />
            <Pagination
                count={100}
                variant='outlined'
                color='primary'
                shape="rounded"
                showFirstButton
                showLastButton
                className='pagination'
                page={activePage}
                onChange={handlePageChange}
            />
        </div>
    )
};

export default Home;