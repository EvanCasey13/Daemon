// A component that return a Game
import React from "react";
const Game = ({ game }) => {
    return (
        <div className = "GameComponent">
            <h5>{game.name}</h5>
            <h5>Rating: {game.rating}</h5>
            <img src={game.background_image} alt="Game Image" />
        </div>
    );
};
export default Game;