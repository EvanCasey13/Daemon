import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../Firebase/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MessageIcon from '@mui/icons-material/Message';
import IconButton from '@mui/material/IconButton';
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
                    <Card>
                        <CardMedia
                            component="img"
                            height="280"
                            image={user?.photoURL}
                            alt="user_profile_picture"
                        />
                        <CardContent>

                            <Grid item xs={20}>
                                <Typography variant="h6" component="p">
                                    {user?.displayName}
                                </Typography>
                            </Grid>
                            <IconButton aria-label="addFriend">
                                <PersonAddIcon />
                            </IconButton>
                            <IconButton aria-label="Message">
                                <MessageIcon />
                            </IconButton>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>

    )
};

export default UserCard;