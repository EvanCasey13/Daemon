import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useSearchParams, Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import PageTemplate from '../../Components/gameListPage/gameListPage';
import { useQuery } from 'react-query';
import { fetchPlatforms, fetchGenres, filterGames } from "../../api/rawg-api";
import AuthContext from "../../AuthContext";
import useDebounce from "../../hooks/useDebounce"
import NavBar from "../../Components/Navbar/Navbar"
import { Input, Collapse, Text } from "@nextui-org/react";
import './search.css';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

function SearchFilterGamesPage() {

  const { user } = useContext(AuthContext);
  const [activePage, setActivePage] = useState(1);
  const [checked, setChecked] = useState([]);
  const [checkedP, setCheckedP] = useState([]);
  const breadcrumbs = useBreadcrumbs();
  const location = useLocation();

  const handleChange = (event, value) => {
    setActivePage(value);
    console.log(value)
  };

  // Add/Remove checked item from genre list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Add/Remove checked item from genre list
  const handleCheckP = (event) => {
    var updatedList = [...checkedP];
    if (event.target.checked) {
      updatedList = [...checkedP, event.target.value];
    } else {
      updatedList.splice(checkedP.indexOf(event.target.value), 1);
    }
    setCheckedP(updatedList);
  };

  const [searchTerm, setSearchTerm] = useSearchParams();
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const handleSearchChange = (e) => {
    setSearchTerm({ query: e.target.value })
  }

  const term = searchTerm.get("query")

  const { data, error, isLoading, isError } = useQuery(['games', activePage, term, checked, checkedP], () => filterGames(activePage, searchTerm, checked, checkedP), { keepPreviousData: true }, { enabled: !!debouncedSearchTerm })

  const genreResults = useQuery({ queryKey: ['genres'], queryFn: fetchGenres });

  const platformResults = useQuery({ queryKey: ['platforms'], queryFn: fetchPlatforms });

  if (isLoading) {
    return <h1>Games loading...</h1>
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const games = data?.results;

  const genres = genreResults.data?.results;

  const platforms = platformResults.data?.results;

  return (
    <div className='Home' >
      <NavBar />
      <br />
      <nav>
        <Link to="/"
          className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
        >
          Home/
        </Link>
        <Link to="/search/games"
          className={location.pathname.startsWith("/search/games") ? "breadcrumb-active" : "breadcrumb-not-active"}
        >
          Search/Games
        </Link>
      </nav>
      <h3>Search & Filter Games</h3>
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
      <Collapse.Group>
        <Collapse title="Genres">
          <div className="list-container">
            {genres?.map((item) => (
              <div className='genreCheck'>
                <input value={item.slug} type="checkbox" defaultValue='action' onChange={handleCheck} />
                <span >{item.name}</span>
              </div>
            ))}
          </div>
        </Collapse>
        <Collapse title="Platforms">
          <div className="list-container">
            {platforms?.map((item) => (
              <div className='platformCheck'>
                <input value={item.id} type="checkbox" defaultValue='action' onChange={handleCheckP} />
                <span >{item.name}</span>
              </div>
            ))}
          </div>
        </Collapse>
      </Collapse.Group>

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

export default SearchFilterGamesPage;