import React, { useState, useEffect } from 'react';
import Game from '../../Components/Game';
import './GameHomepage.css';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';


function GameHomepage() {

    const [games, setGames] = useState([]);

    const [page, setPage] = React.useState(1);

    const handleChange = (event, value) => {
        setPage(value);
      };

    const url = `https://rawg.io/api/games?token&key=0532a1e505284b338b68cf1f1dcdee02&page=${page}`;

    const fetchGames = async () => {
        const data = await fetch(url);
        const games = await data.json();
        setGames(games.results);
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

    <Stack spacing={2}>
      <Pagination variant="outlined" shape="rounded" showFirstButton showLastButton count={100} page={page} onChange={handleChange} onClick={fetchGames} />
    </Stack>

        </div>
        </div>
    );

}

export default GameHomepage;