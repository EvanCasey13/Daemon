import React, { useState, useEffect } from "react";
import { Card, Col, Row, Grid, Text } from "@nextui-org/react";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { db } from "../../Firebase/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import './User.css'
import { useParams } from "react-router-dom";

const UserCard = () => {
    const [user, setUser] = useState([]);
    let params = useParams();

    useEffect(() => {
        const d = query(collection(db, "users"), where("uid", "==", params.id));
        const getUser = async () => {
            const data = await getDocs(d)
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getUser()
    }, [params.id]);

    return (
        <div className="UserCard">
            {user.map(u => {
                return (
                    <Grid container spacing={3} sx={{ paddingTop: "10%" }}>
                        <Grid item xs={8} sm={8} md={8} lg={8} xl={12} >
                            <Card css={{ w: "20%", h: "380px" }}>
                                <Card.Body css={{ p: 0 }}>
                                    <Card.Image
                                        src={u?.profilePicture}
                                        objectFit="contain"
                                        width="100%"
                                        height="100%"
                                    />
                                </Card.Body>
                                <Card.Footer
                                    isBlurred
                                    css={{
                                        position: "absolute",
                                        bgBlur: "#0f111466",
                                        borderTop: "$borderWeights$light solid $gray800",
                                        bottom: 0,
                                        zIndex: 1,
                                    }}
                                >
                                    <Row>
                                        <Col>
                                            <Row>
                                                <Col>
                                                    <Text color="#d1d1d1" size={12}>
                                                        {u?.email}
                                                    </Text>
                                                </Col>
                                                <PersonAddIcon />
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </Grid>
                    </Grid>
                )
            })}
        </div>
    )
};

export default UserCard;