// A component that return a Developer
import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Developers = ({ developer }) => {
    
    return (
        <div className="HomeComponent">
            <Link to={`/developers/${developer.id}`}>
            <Card background='primary' className="homeCard">
                <Card.Img variant="top" src={developer.image_background} />
                <Card.Body>
                    <Card.Title>{developer.name}</Card.Title>
                </Card.Body>
            </Card>
            </Link>
        </div>
    );
};
export default Developers;