import React, { useState, useContext, useEffect } from 'react';
import { Navigate, useSearchParams, useLocation, Link } from 'react-router-dom';
import './GameHomepage.css';
import Pagination from '@mui/material/Pagination';
import PageTemplate from '../../Components/gameListPage/gameListPage';
import { useQuery } from 'react-query';
import { fetchPopular, fetchGenres, fetchPlatforms } from "../../api/rawg-api";
import AuthContext from "../../AuthContext";
import useDebounce from "../../hooks/useDebounce"
import NavBar from "../../Components/Navbar/Navbar"
import { Input, Button } from "@nextui-org/react";
import useBreadcrumbs from 'use-react-router-breadcrumbs';
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

  const { data, error, isLoading, isError } = useQuery(['games', activePage, term, selectedGenres, selectedPlatforms], () => fetchPopular(activePage, searchTerm, selectedGenres, selectedPlatforms), { keepPreviousData: true }, { enabled: !!debouncedSearchTerm })

  const genreResults = useQuery({ queryKey: ['genres'], queryFn: fetchGenres });

  const platformResults = useQuery({ queryKey: ['platforms'], queryFn: fetchPlatforms });

  if (isLoading) {
    return <h1>Games loading...</h1>
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const games = data?.results;

  const genres = genreResults.data.results;

  const platforms = platformResults.data.results;

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
      <br />
      <div className="genreSelect">
        <h5>Genre</h5>
        <select onChange={handleChangeGenre}>
          {genres?.map((item) => (
            <><option value={item.slug}>{item.name}</option></>
          ))}
        </select>
      </div>
      <br />
      <div className="platformSelect">
      <h5>Platform</h5>
        <select onChange={handleChangePlatform}>
          {platforms?.map((item) => (
            <><option value={item.id}>{item.name}</option></>
          ))}
        </select>
      </div>

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