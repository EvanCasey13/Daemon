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

    const chip = { margin: 0.5 };
    const root = {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: 1.5,
        margin: 0,
    };
    return (
        <div className="HomeComponent">
            <Grid container sx={{ paddingTop: "10%" }}>
                <Grid item xs={8} sm={8} md={8} lg={8} xl={2}>
                    <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={user?.photoURL}
                            alt="user_profile_picture"
                        />
                     <CardContent>

              <Grid item xs={20}>
                <Typography variant="h6" component="p">
                  {user?.displayName}
                </Typography>
              </Grid>
          </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>

    )
};

export default UserCard;