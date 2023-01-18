import React, { useState } from "react";
import { green, blue, yellow, red, grey } from '@mui/material/colors';
import { auth, db } from "../../Firebase/firebase";
import { useNavigate, Link } from "react-router-dom";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import CircleIcon from '@mui/icons-material/Circle';
import './User.css'
import { Card, Col, Row, Table, Grid, Text } from "@nextui-org/react";
import UserCard from "./UserCard";

const UserList = () => {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const [profilePicture, setProfilePicture] = useState("")
    const [userId, setUserId] = useState("")
    const navigate = useNavigate();
    const fetchUserNameProfilePicture = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
            setProfilePicture(data.profilePicture);
            setUserId(data.uid);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    return (
        <div className="userListPage">
            <Grid container css={{
                height: "auto",
                minWidth: "100%",
                marginLeft: "42%"
            }}>
                <Grid item xs={0} sm={0} md={0} lg={10} xl={10} >
                <UserCard />
                </Grid>
            </Grid>

            <Grid container css={{
                paddingLeft: "14.5%"
            }}>
                <Grid item xs={10} sm={10} md={10} lg={10} xl={10} >
                    <Table
                        aria-label="List Links"
                        css={{
                            height: "auto",
                            minWidth: "100%",
                            left: "50%"
                        }}
                    >
                        <Table.Header>
                            <Table.Column>Game Statistics</Table.Column>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row key="1">
                                <Table.Cell>
                                    <CircleIcon sx={{ color: green[500], fontSize: 15 }} />
                                    <Link to={`/playing/${user?.uid}`} underline="none">
                                        Playing
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row key="2">
                                <Table.Cell>
                                    <CircleIcon sx={{ color: blue[500], fontSize: 15 }} />
                                    <Link to={`/completed/${user?.uid}`} underline="none">
                                        Completed
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row key="3">
                                <Table.Cell>
                                    <CircleIcon sx={{ color: yellow[500], fontSize: 15 }} />
                                    <Link to={`/on-hold/${user?.uid}`} underline="none">
                                        On-Hold
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row key="4">
                                <Table.Cell>
                                    <CircleIcon sx={{ color: red[500], fontSize: 15 }} />
                                    <Link to={`/dropped/${user?.uid}`} underline="none">
                                        Dropped
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row key="5">
                                <Table.Cell>
                                    <CircleIcon sx={{ color: grey[500], fontSize: 15 }} />
                                    <Link to={`/planning/${user?.uid}`} underline="none">
                                        Planning to play
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Grid>
            </Grid>
        </div>

    )
};

export default UserList;