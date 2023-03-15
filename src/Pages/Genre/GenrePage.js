import React, { useState, useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import { Input } from "@nextui-org/react";
import { Navigate, useSearchParams, useLocation, Link } from 'react-router-dom';
import { fetchPopularByGenre } from "../../api/rawg-api";
import AuthContext from "../../AuthContext";
import PageTemplate from '../../Components/gameListPage/gameListPage';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import useDebounce from "../../hooks/useDebounce"
import NavBar from "../../Components/Navbar/Navbar"
import useBreadcrumbs from 'use-react-router-breadcrumbs';

function GenrePage() {
    const { name } = useParams();

    const { user } = useContext(AuthContext);

    const [activePage, setActivePage] = useState(1);

    const [searchTerm, setSearchTerm] = useSearchParams();
    const debouncedSearchTerm = useDebounce(searchTerm, 1000);

    const breadcrumbs = useBreadcrumbs();
    const location = useLocation();

    const handleChange = (event, value) => {
        setActivePage(value);
        console.log(value)
    };

    const handleSearchChange = (e) => {
        setSearchTerm({ query: e.target.value })
    }

    const term = searchTerm.get("query")

    const { data, error, isLoading, isError } = useQuery(['genres/', name, activePage, term], () => fetchPopularByGenre(name, activePage, searchTerm), { keepPreviousData: true }, { enabled: !!debouncedSearchTerm })

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
        <div className='Genre' >
            <NavBar />
            <nav>
                <Link to="/"
                    className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
                >
                    Home/
                </Link>
                <Link to="/"
                    className={location.pathname.startsWith("/genres/") ? "breadcrumb-active" : "breadcrumb-not-active"}
                >
                    Genres/{name}
                </Link>
            </nav>
            <br />
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

export default GenrePage;