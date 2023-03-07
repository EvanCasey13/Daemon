import React, { useState, useContext, useEffect } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import './GameHomepage.css';
import Pagination from '@mui/material/Pagination';
import PageTemplate from '../../Components/gameListPage/gameListPage';
import { useQuery } from 'react-query';
import { fetchPopular, fetchGenres, } from "../../api/rawg-api";
import AuthContext from "../../AuthContext";
import useDebounce from "../../hooks/useDebounce"
import NavBar from "../../Components/Navbar/Navbar"
import { Input } from "@nextui-org/react";
function GameHomepage() {

  const { user } = useContext(AuthContext);
  const [activePage, setActivePage] = useState(1);
  const [checked, setChecked] = useState([]);

  const handleChange = (event, value) => {
    setActivePage(value);
    console.log(value)
  };

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  const [searchTerm, setSearchTerm] = useSearchParams();
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const handleSearchChange = (e) => {
    setSearchTerm({ query: e.target.value })
  }

  const term = searchTerm.get("query")

  const { data, error, isLoading, isError } = useQuery(['games', activePage, term, checked], () => fetchPopular(activePage, searchTerm, checked), { keepPreviousData: true }, { enabled: !!debouncedSearchTerm })

  const genreResults = useQuery({ queryKey: ['genres'], queryFn: fetchGenres });

  if (isLoading) {
    return <h1>Games loading...</h1>
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const games = data?.results;

  const genres = genreResults.data?.results;

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

      <div className="list-container">
        {genres.map((item) => (
          <div >
            <input value={item.slug} type="checkbox" defaultValue='Action' onChange={handleCheck} />
            <span >{item.name}</span>
          </div>
        ))}
        {`Items checked are: ${checked}`}
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