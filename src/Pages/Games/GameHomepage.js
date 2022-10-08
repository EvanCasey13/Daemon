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

    const url = `https://rawg.io/api/games?page_size=18&key=${process.env.REACT_APP_RAWG_API_KEY}&page=${page}`;

    const fetchGames = async () => {
        const data = await fetch(url);
        const games = await data.json();
        setGames(games?.results);
    };

    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <div className='GameHome'>
            <div className="games">
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