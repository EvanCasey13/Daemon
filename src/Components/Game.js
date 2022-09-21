// A component that return a Game
import React from "react";
import Card from 'react-bootstrap/Card';

const Game = ({ game }) => {
    return (
        <div className="HomeComponent">
            <Card background='primary' className="homeCard">
                <Card.Img variant="top" src={game.background_image} />
                <Card.Body>
                    <Card.Title>{game.name}</Card.Title>
                    <Card.Text>
                        Rating: {game.rating}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};
export default Game;