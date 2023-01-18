import React, { useState } from "react";
import { Card, Col, Row, Table, Grid, Text } from "@nextui-org/react";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../Firebase/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import './User.css'

const UserCard = () => {
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
        <div className="UserCard">
            <Grid container spacing={3} sx={{ paddingTop: "10%" }}>
                <Grid item xs={8} sm={8} md={8} lg={8} xl={12} > 
                <Card css={{ w: "20%", h: "380px" }}>
                <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src={user?.photoURL}
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
                                        {user?.displayName}
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
        </div>

    )
};

export default UserCard;