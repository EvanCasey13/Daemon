import React, { useState, useEffect } from "react";
import { Card, Col, Row, Grid, Text, Link } from "@nextui-org/react";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { db } from "../../Firebase/firebase";
import { query, collection, getDocs, where, onSnapshot } from "firebase/firestore";
import './User.css'
import { useParams } from "react-router-dom";
import UserGameStats from "./UserGameStats";

const UserCard = () => {
    const [user, setUser] = useState([]);
    const [userPostsCount, setUserPostsCount] = useState([]);
    let params = useParams();

    useEffect(() => {
        const d = query(collection(db, "users"), where("uid", "==", params.id));
        const getUser = async () => {
            const data = await getDocs(d)
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getUser()
    }, [params.id]);

    useEffect(() => {
        const postsRef = collection(db, "forumPosts");
        const q = query(postsRef, where("userUID", "==", params.id));
        const getUserPosts = async () => {
            onSnapshot(q, (data) => {
                setUserPostsCount(data.size)
            })
        }
        getUserPosts()
    }, [params.id]);

    return (
        <div className="UserCard">
            {user.map(u => {
                return (
                    <Grid container spacing={3}>
                        <div className="container">
                            <div className="row">
                                <div>
                                    <Grid item xs={0} sm={0} md={12} lg={12} xl={12}>
                                        <Card css={{ width: 300, height: 300 }}>
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
                                                        <Row>
                                                            <Col>
                                                                <Link href={`/user/posts/${u?.uid}`} underline="none">
                                                                    <Text color="#d1d1d1" size={12}>
                                                                        Forum Posts: {userPostsCount}
                                                                    </Text>
                                                                </Link>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Card.Footer>
                                        </Card>
                                    </Grid></div>
                                <div>
                                    <UserGameStats />
                                </div>
                            </div>
                        </div>
                    </Grid>
                )
            })}
        </div>
    )
};

export default UserCard;