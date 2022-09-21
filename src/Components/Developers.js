// A component that return a Developer
import React from "react";
import Card from 'react-bootstrap/Card';

const Developers = ({ developer }) => {
    
    return (
        <div className="HomeComponent">
            <Card background='primary' className="homeCard">
                <Card.Img variant="top" src={developer.image_background} />
                <Card.Body>
                    <Card.Title>{developer.name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};
export default Developers;