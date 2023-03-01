import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row, Text } from "@nextui-org/react";

const Platform = ({ platform }) => {
    return (
        <div className="PlatformComponent">
            <Card css={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} isHoverable>
                <Card.Body css={{ p: 0 }}>
                    <Link to={`/platforms/${platform.id}`}>
                        <Card.Image
                            src={platform.image_background}
                            width="100%"
                            height={200}
                            objectFit="cover"
                            alt="Platform card"
                            id={platform.slug}
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
                                {platform.name}
                            </Text>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </div>
    );
};
export default Platform;