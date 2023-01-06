import React, { useState, useContext } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import './GameHomepage.css';
import Pagination from '@mui/material/Pagination';
import PageTemplate from '../../Components/gameListPage';
import { useQuery } from 'react-query';
import { fetchPopular } from "../../api/rawg-api";
import AuthContext from "../../AuthContext";
import useDebounce from "../../hooks/useDebounce"
import NavBar from "../../Components/Navbar/Navbar"
import { Input } from "@nextui-org/react";
function GameHomepage() {

    const { user } = useContext(AuthContext);

    const [activePage, setActivePage] = useState(1);

    const handleChange = (event, value) => {
        setActivePage(value);
        console.log(value)
    };

    const [searchTerm, setSearchTerm] = useSearchParams();
    const debouncedSearchTerm = useDebounce(searchTerm, 1000);

    const handleSearchChange = (e) => {
        setSearchTerm({ query: e.target.value })
    }

    const term = searchTerm.get("query")

    const { data, error, isLoading, isError } = useQuery(['games', activePage, term], () => fetchPopular(activePage, searchTerm), { keepPreviousData: true }, { enabled: !!debouncedSearchTerm })

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
            <NavBar />
            <br />
            <h2>Popular Games</h2>
            <form>
                <Input
                id="filled-search"
                    bordered
                    fullWidth
                    labelPlaceholder="Search for a game"
                    color="default"
                    value={term == null ? '' : term}
                    onChange={handleSearchChange} />
            </form>
            <PageTemplate
                games={games}
            />
            <Pagination
                count={100}
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