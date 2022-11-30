import React, { useState, useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import TextField from "@mui/material/TextField";
import { Navigate, useSearchParams } from 'react-router-dom';
import { fetchGamesByPlatform } from "../../api/rawg-api";
import AuthContext from "../../AuthContext";
import PageTemplate from '../../Components/gameListPage/index';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import useDebounce from "../../hooks/useDebounce"
import NavBar from "../../Components/Navbar/Navbar"

function PlatformPage() {
    
    const { id } = useParams();
   
    const { user } = useContext(AuthContext);

    const [activePage, setActivePage] = useState(1);

    const [searchTerm, setSearchTerm] = useSearchParams();
    const debouncedSearchTerm = useDebounce(searchTerm, 1000);

    const handleChange = (event, value) => {
        setActivePage(value);
        console.log(value)
    };

    const handleSearchChange = (e) => {
        setSearchTerm({ query: e.target.value })
    }

    const term = searchTerm.get("query")

    const { data, error, isLoading, isError } = useQuery(['platforms/', id, activePage, term], () => fetchGamesByPlatform(id, activePage, searchTerm), { keepPreviousData: true }, { enabled: !!debouncedSearchTerm })

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
        <div className='Platform' >
            <NavBar />
            <br /><br /><br /><br />
            <form>
                <TextField
                    id="filled-search"
                    fullWidth
                    label="Search for a game"
                    type="search"
                    variant="filled"
                    value={term == null ? '' : term}
                    onChange={handleSearchChange}
                />
            </form>
            <PageTemplate games={games} />
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
};

export default PlatformPage;