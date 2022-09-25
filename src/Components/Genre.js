// A component that return a Genre
import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Genre = ({ genre }) => {
    
    return (
        <div className="HomeComponent">
            <Link to={`/genres/${genre.id}`}>
            <Card background='primary' className="homeCard">
                <Card.Img variant="top" src={genre.image_background} />
                <Card.Body>
                    <Card.Title>{genre.name}</Card.Title>
                </Card.Body>
            </Card>
            </Link>
        </div>
    );
};
export default Genre;