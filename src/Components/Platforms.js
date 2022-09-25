// A component that return a Platform
import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Platform = ({ platform }) => {
    
    return (
        <div className="HomeComponent">
            <Link to={`/platforms/${platform.id}`}>
            <Card background='primary' className="homeCard">
                <Card.Img variant="top" src={platform.image_background} />
                <Card.Body>
                    <Card.Title>{platform.name}</Card.Title>
                </Card.Body>
            </Card>
            </Link>
        </div>
    );
};
export default Platform;