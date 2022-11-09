import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import './GameHomepage.css';
import Pagination from '@mui/material/Pagination';
import PageTemplate from '../../Components/gameListPage';
import TextField from "@mui/material/TextField";
import { useQuery } from 'react-query';
import { fetchPopular } from "../../api/rawg-api";
import AuthContext from "../../AuthContext";
import useDebounce from "../../hooks/useDebounce"

function GameHomepage() {

    const { user } = useContext(AuthContext);

    const [activePage, setActivePage] = useState(1);

    const handleChange = (event, value) => {
        setActivePage(value);
        console.log(value)
    };

    const [searchTerm, setSearchTerm] = useState("")
    const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value)
    }

    const { data, error, isLoading, isError } = useQuery(['games', activePage, debouncedSearchTerm], () => fetchPopular(activePage, debouncedSearchTerm), { keepPreviousData: true }, { enabled: !!debouncedSearchTerm})

    if (isLoading) {
        return <h1>Games loading...</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const games = data?.results;

    if (!user) {
        return <Navigate replace to="/login" />;
    }

    return (
        <div className='Home' >
            <form>

            <br></br>
    <TextField
    id="filled-search"
    fullWidth 
    label="Search for a game"
    type="search"
    variant="filled"
    value={searchTerm}
    onChange={handleSearchChange}
        />
       
        </form>
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