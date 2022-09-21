// A component that return a Genre
import React from "react";
import Card from 'react-bootstrap/Card';

const Genre = ({ genre }) => {
    
    return (
        <div className="HomeComponent">
            <Card background='primary' className="homeCard">
                <Card.Img variant="top" src={genre.image_background} />
                <Card.Body>
                    <Card.Title>{genre.name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};
export default Genre;