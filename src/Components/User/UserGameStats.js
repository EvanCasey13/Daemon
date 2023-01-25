import React, { useState, useEffect } from "react";
import { Card, Col, Row, Grid, Text, Badge } from "@nextui-org/react";
import { db } from "../../Firebase/firebase";
import { query, collection, getDocs, where, onSnapshot } from "firebase/firestore";
import './User.css'
import { useParams } from "react-router-dom";

const UserStats = () => {
    const [user, setUser] = useState([]);
    const [playingCount, setPlayingCount] = useState([]);
    const [completedCount, setCompletedCount] = useState([]);
    const [holdCount, setOnHoldCount] = useState([]);
    const [droppedCount, setDroppedCount] = useState([]);
    const [planningCount, setPlanningCount] = useState([]);
    const [totalCount, setTotalCount] = useState([]);
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

    useEffect(() => {
        const favouritesRef = collection(db, "users/" + params.id + "/favourites");
        const q = query(favouritesRef);
        const getTotalCount = async () => {
            onSnapshot(q, (data) => {
                setTotalCount(data.size);
            })
        }
        getTotalCount()
    }, [params.id]);

    return (
        <div className="UserStats">
            <Grid.Container gap={0.5} css={{ paddingTop: "2%" }}>
                <Text h3>Statistics</Text>
                <Card.Divider />
                <Grid xs={12} alignItems="center">
                <Text h4>Game Statistics</Text>
                </Grid>
                <Card.Divider />
                <Grid xs={12} alignItems="center">
                    <Badge variant="dot" />
                    <Text css={{ ml: "$2" }}>Planning to play</Text>
                    <Text css={{ paddingLeft: 51 }}>{planningCount}</Text>
                </Grid>
                <Grid xs={12} alignItems="center">
                    <Badge color="primary" variant="dot" />
                    <Text css={{ ml: "$2" }}>Completed</Text>
                    <Text css={{ paddingLeft: 82 }}>{completedCount}</Text>
                </Grid>
                <Grid xs={12} alignItems="center">
                    <Badge color="success" variant="dot" />
                    <Text css={{ ml: "$2" }}>Playing</Text>
                    <Text css={{ paddingLeft: 108 }}>{playingCount}</Text>
                </Grid>
                <Grid xs={12} alignItems="center">
                    <Badge color="warning" variant="dot" />
                    <Text css={{ ml: "$2" }}>On Hold</Text>
                    <Text css={{ paddingLeft: 100 }}>{holdCount}</Text>
                </Grid>
                <Grid xs={12} alignItems="center">
                    <Badge color="error" variant="dot" />
                    <Text css={{ ml: "$2" }}>Dropped</Text>
                    <Text css={{ paddingLeft: 97 }}>{droppedCount}</Text>
                </Grid>
                <Grid xs={12} alignItems="center">
                    <Badge color="secondary" variant="dot" />
                    <Text css={{ ml: "$2" }}>Total Games</Text>
                    <Text css={{ paddingLeft: 78 }}>{totalCount}</Text>
                </Grid>
            </Grid.Container>
        </div>
    )
};

export default UserStats;