import React, { useState, useEffect } from 'react';
import Game from '../Components/Game/Game';

const Search = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const [games, setGames] = useState([]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        let slug = searchTerm.split(' ').join('-').toLowerCase()
        const url = `https://rawg.io/api/games?page_size=18&key=${process.env.REACT_APP_RAWG_API_KEY}&search=${slug}`;
        const data = await fetch(url);
        const games = await data.json();
        setGames(games.results);
        console.log(games.results)
    }

    return (
        <div className='GameHome'>
            <div className="games">
                <form onSubmit={onSubmit}>
                <input type="text" value={searchTerm} onChange={handleChange} />
                <br></br>
                <input type="submit" />
                </form>

                {games?.map(game => {
                    return <Game
                        key={game.id} game={game}
                    />;    
                })}
            </div>
            </div>

            );
}

export default Search