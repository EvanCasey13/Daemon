import React, { useState, useEffect } from 'react';
import Game from '../../Components/Game';
function Home() {
    const [popular, setPopular] = useState([]);
    const url = "https://rawg.io/api/games?token&key=8a8630a556d54818aeb790b5e9c140c1";

    useEffect(() => {
        fetchPopular();
    }, []);

    const fetchPopular = async () => {
        const data = await fetch(url);
        const games = await data.json();
        console.log(games.results);
        setPopular(games.results);
    };

    return (
        <div className='Home' >
            <h1>This is the Home page</h1>
            <div className="popular-games">
                {popular.map(game => {
                    return <Game
                        key={game.id} game={game}
                    />;
                })}
            </div>
        </div>
    );

}

export default Home;