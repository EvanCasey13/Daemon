import React from "react";
import { Link } from "react-router-dom";
import 'reactjs-popup/dist/index.css';
import { Card, Col, Row, Text } from "@nextui-org/react";

const Genre = ({ genre }) => {
  return (
    <div className="GenreComponent">
      <Card css={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} isHoverable>
        <Card.Body css={{ p: 0 }}>
          <Link to={`/genres/${genre.slug}`}>
            <Card.Image
              src={genre.image_background}
              width="100%"
              height={200}
              objectFit="cover"
              alt="Genre card"
              id={genre.slug}
            />
          </Link>
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#ffffff66",
            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Text color="#000" size={12}>
                {genre.name}
              </Text>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Genre;