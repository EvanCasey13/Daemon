import React, { useState, useEffect } from 'react';
import Game from '../../Components/Game/Game';
import './GameHomepage.css';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

function GameHomepage() {

    const [games, setGames] = useState([]);

    const [page, setPage] = React.useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const [searchTerm, setSearchTerm] = useState("")
    const [searchGames, setSearchGames] = useState([]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        let slug = searchTerm.split(' ').join('-').toLowerCase()
        const url = `https://rawg.io/api/games?page_size=17&key=${process.env.REACT_APP_RAWG_API_KEY}&search=${slug}`;
        const data = await fetch(url);
        const games = await data.json();
        setGames(games.results);
        console.log(games.results)
    }

    const fetchGames = async () => {
        const data = await fetch(`https://rawg.io/api/games?page_size=17&key=${process.env.REACT_APP_RAWG_API_KEY}&page=${page}`);
        const games = await data.json();
        setGames(games?.results);
    };

    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <div className='GameHome'>
            <div className="games">
            <form onSubmit={onSubmit}>
                <input type="text" value={searchTerm} onChange={handleSearchChange} />
                <br></br>
                <input type="submit" />
                </form>
                {games?.map(game => {
                    return <Game
                        key={game.id} game={game}
                    />;
                })}
            </div>
            <Stack spacing={2}>
                <Pagination variant="outlined" shape="rounded" showFirstButton showLastButton count={1000} page={page} onChange={handleChange} onClick={fetchGames} />
            </Stack>
        </div>
    );

}

export default GameHomepage;