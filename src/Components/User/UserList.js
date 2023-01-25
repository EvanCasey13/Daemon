import React, { useState, useEffect } from "react";
import { db } from "../../Firebase/firebase";
import { query, collection, getDocs, where, onSnapshot } from "firebase/firestore";
import { useParams } from "react-router-dom";
import './User.css'
import { Grid, Card, Text, Link } from "@nextui-org/react";
import UserCard from "./UserCard";
import UserStats from "./UserGameStats";
import CompletedIcon from "../../Icons/CompletedIcon";
import PlanningIcon from "../../Icons/PlanningIcon";
import DroppedIcon from "../../Icons/DroppedIcon";
import OnHoldIcon from "../../Icons/OnHoldIcon";
import PlayingIcon from "../../Icons/PlayingIcon";

const UserList = () => {
    const [user, setUser] = useState([]);
    const [playingCount, setPlayingCount] = useState([]);
    const [completedCount, setCompletedCount] = useState([]);
    const [holdCount, setOnHoldCount] = useState([]);
    const [droppedCount, setDroppedCount] = useState([]);
    const [planningCount, setPlanningCount] = useState([]);
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
        const favouritesRef = collection(db, "users/" + params.id + "/favourites");
        const q = query(favouritesRef, where("Status", "==", "On-hold"));
        const getOnHoldCount = async () => {
            onSnapshot(q, (data) => {
                setOnHoldCount(data.size);
            })
        }
        getOnHoldCount()
    }, [params.id]);

    useEffect(() => {
        const favouritesRef = collection(db, "users/" + params.id + "/favourites");
        const q = query(favouritesRef, where("Status", "==", "Completed"));
        const getCompletedCount = async () => {
            onSnapshot(q, (data) => {
                setCompletedCount(data.size);
            })
        }
        getCompletedCount()
    }, [params.id]);

    useEffect(() => {
        const favouritesRef = collection(db, "users/" + params.id + "/favourites");
        const q = query(favouritesRef, where("Status", "==", "Playing"));
        const getPlayingCount = async () => {
            onSnapshot(q, (data) => {
                setPlayingCount(data.size);
            })
        }
        getPlayingCount()
    }, [params.id]);

    useEffect(() => {
        const favouritesRef = collection(db, "users/" + params.id + "/favourites");
        const q = query(favouritesRef, where("Status", "==", "Dropped"));
        const getDroppedCount = async () => {
            onSnapshot(q, (data) => {
                setDroppedCount(data.size);
            })
        }
        getDroppedCount()
    }, [params.id]);

    useEffect(() => {
        const favouritesRef = collection(db, "users/" + params.id + "/favourites");
        const q = query(favouritesRef, where("Status", "==", "Plan to play"));
        const getPlanningCount = async () => {
            onSnapshot(q, (data) => {
                setPlanningCount(data.size);
            })
        }
        getPlanningCount()
    }, [params.id]);

    return (
        <div className="userListPage">
            {user.map(u => {
                return (
                    <Grid container css={{
                        paddingLeft: "14.5%"
                    }}>
                        <Grid.Container gap={2} >
                            <Grid item xs={10} sm={10} md={10} lg={10} xl={10} >
                                <Card>
                                    <div className="userCard">
                                        <UserCard />
                                    </div>
                                    <Card.Header>
                                        <Text b>Game list</Text>
                                    </Card.Header>
                                    <Card.Divider />
                                    <Card.Body>
                                        <Link href={`/playing/${u?.uid}`} underline="none" >
                                            <PlayingIcon />
                                            Playing
                                            <Text css={{ paddingLeft: 108 }}>{playingCount}</Text>
                                        </Link>
                                    </Card.Body>
                                    <Card.Divider />
                                    <Card.Body css={{ py: "$10" }}>
                                        <Link href={`/completed/${u?.uid}`} underline="none">
                                            <CompletedIcon />
                                            Completed
                                            <Text css={{ paddingLeft: 82 }}>{completedCount}</Text>
                                        </Link>
                                    </Card.Body>
                                    <Card.Divider />
                                    <Card.Divider />
                                    <Card.Body css={{ py: "$10" }}>
                                        <Link href={`/on-hold/${u?.uid}`} underline="none">
                                            <OnHoldIcon />
                                            On-Hold
                                            <Text css={{ paddingLeft: 100 }}>{holdCount}</Text>
                                        </Link>
                                    </Card.Body>
                                    <Card.Divider />
                                    <Card.Divider />
                                    <Card.Body css={{ py: "$10" }}>
                                        <Link href={`/dropped/${u?.uid}`} underline="none">
                                            <DroppedIcon />
                                            Dropped
                                            <Text css={{ paddingLeft: 108 }}>{droppedCount}</Text>
                                        </Link>
                                    </Card.Body>
                                    <Card.Divider />
                                    <Card.Body css={{ py: "$10" }}>
                                        <Link href={`/planning/${u?.uid}`} underline="none">
                                            <PlanningIcon />
                                            Planning to play
                                            <Text css={{ paddingLeft: 50 }}>{planningCount}</Text>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Grid>
                        </Grid.Container>
                    </Grid>
                )
            })}
        </div>

    )
};

export default UserList;