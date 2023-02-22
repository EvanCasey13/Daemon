import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row, Grid, Text } from "@nextui-org/react";

const UserCard = ({ user }) => {

  return (
    <div className="UserCardComponent">
      <Grid.Container gap={1}>
          <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card css={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} isHoverable>
              <Card.Body css={{ p: 0 }}>
                <Link to={`/profile/${user.uid}`}>
                  <Card.Image
                    src={user?.profilePicture}
                    width={300}
                    height={200}
                    objectFit="cover"
                    alt="User Image background missing"
                    showSkeleton="true"
                    referrerpolicy="no-referrer"
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
                      {user.name}
                    </Text>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
    </div>
  );
};

export default UserCard;