import React, { useState, useEffect } from "react";
import { green, blue, yellow, red, grey } from '@mui/material/colors';
import { db } from "../../Firebase/firebase";
import { Link } from "react-router-dom";
import { query, collection, getDocs, where } from "firebase/firestore";
import CircleIcon from '@mui/icons-material/Circle';
import { useParams } from "react-router-dom";
import './User.css'
import { Table, Grid } from "@nextui-org/react";
import UserCard from "./UserCard";

const UserList = () => {
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
        <div className="userListPage">
            {user.map(u => {
                return (
                    <Grid container css={{
                        paddingLeft: "14.5%"
                    }}>
                        <Grid item xs={0} sm={0} md={0} lg={10} xl={10} css={{
                            height: "auto",
                            minWidth: "100%",
                            marginLeft: "31.5%"
                        }}>
                            <UserCard />
                        </Grid>
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
                                            <Link to={`/playing/${u?.uid}`} underline="none">
                                                Playing
                                            </Link>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row key="2">
                                        <Table.Cell>
                                            <CircleIcon sx={{ color: blue[500], fontSize: 15 }} />
                                            <Link to={`/completed/${u?.uid}`} underline="none">
                                                Completed
                                            </Link>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row key="3">
                                        <Table.Cell>
                                            <CircleIcon sx={{ color: yellow[500], fontSize: 15 }} />
                                            <Link to={`/on-hold/${u?.uid}`} underline="none">
                                                On-Hold
                                            </Link>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row key="4">
                                        <Table.Cell>
                                            <CircleIcon sx={{ color: red[500], fontSize: 15 }} />
                                            <Link to={`/dropped/${u?.uid}`} underline="none">
                                                Dropped
                                            </Link>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row key="5">
                                        <Table.Cell>
                                            <CircleIcon sx={{ color: grey[500], fontSize: 15 }} />
                                            <Link to={`/planning/${u?.uid}`} underline="none">
                                                Planning to play
                                            </Link>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid>
                    </Grid>
                )
            })}
        </div>

    )
};

export default UserList;