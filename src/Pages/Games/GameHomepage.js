import React, { useState, useContext, useEffect } from 'react';
import { Navigate, useSearchParams, useLocation, Link } from 'react-router-dom';
import './GameHomepage.css';
import Pagination from '@mui/material/Pagination';
import PageTemplate from '../../Components/gameListPage/gameListPage';
import { useQuery } from 'react-query';
import { fetchPopular, fetchGenres, } from "../../api/rawg-api";
import AuthContext from "../../AuthContext";
import useDebounce from "../../hooks/useDebounce"
import NavBar from "../../Components/Navbar/Navbar"
import { Input, Button } from "@nextui-org/react";
import useBreadcrumbs from 'use-react-router-breadcrumbs';
function GameHomepage() {

  const { user } = useContext(AuthContext);
  const [activePage, setActivePage] = useState(1);
  const breadcrumbs = useBreadcrumbs();
  const location = useLocation();

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
      <nav>
        {breadcrumbs.map(({ match, breadcrumb }) => (
          <Link
            key={match.url}
            to={match.url}
            className={match.pathname === location.pathname ? "breadcrumb-active" : "breadcrumb-not-active"}
          >
            {breadcrumb}/
          </Link>
        ))}
      </nav>
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