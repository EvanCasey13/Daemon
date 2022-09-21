// A component that return a Platform
import React from "react";
import Card from 'react-bootstrap/Card';

const Platform = ({ platform }) => {
    
    return (
        <div className="HomeComponent">
            <Card background='primary' className="homeCard">
                <Card.Img variant="top" src={platform.image_background} />
                <Card.Body>
                    <Card.Title>{platform.name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};
export default Platform;