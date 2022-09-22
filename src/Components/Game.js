// A component that return a Game
import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Game = ({ game }) => {

    return (
        <div className="HomeComponent">
            <Link to={`/games/${game.id}`}>
            <Card background='primary' className="homeCard">
                <Card.Img variant="top" src={game.background_image} />
                <Card.Body>
                    <Card.Title>{game.name}</Card.Title>
                    <Card.Text>
                        Rating: {game.rating}
                    </Card.Text>
                </Card.Body>
            </Card>
            </Link>
        </div>
        
    );
};

export default Game;