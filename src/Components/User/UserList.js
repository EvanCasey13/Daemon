import React, { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { green, blue, yellow, red, grey } from '@mui/material/colors';
import { auth, db } from "../../Firebase/firebase";
import { useNavigate } from "react-router-dom";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import CircleIcon from '@mui/icons-material/Circle';
import Stack from '@mui/material/Stack';
import './User.css'
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MessageIcon from '@mui/icons-material/Message';

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
    
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <div className="userListPage">
            <Box sx={{ width: '100%' }}
           
            >
                <Paper
                    component="div"
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                        padding: 3,
                        margin: 0,
                    }}
                >
<Card css={{ w: "20%", h: "380px" }}>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={user?.photoURL}
        objectFit="contain"
        width="100%"
        height="100%"
        alt="Relaxing app background"
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
                    <Grid container >
                        <Grid item xs={10} sm={10} md={10} lg={10} xl={10} >
                            <Divider />
                            <h4 className='userListTitle'>Statistics</h4>
                            <Divider />
                            <h5 className='userListTitle'>Game Stats</h5>
                            <Divider />
                            <Stack
                                direction="row"
                                divider={<Divider orientation="vertical" flexItem />}
                                spacing={2}
                            >
                                <Item>Time played </Item>
                                <Item>Average rating</Item>
                            </Stack>
                            <Divider />
                            <List>
                                <ListItem disablePadding>
                                    <CircleIcon sx={{ color: green[500], fontSize: 15 }} />
                                    <Link href= {`/playing/${user?.uid}`} underline="none">
                                        Playing
                                    </Link>
                                </ListItem>
                                <ListItem disablePadding>
                                    <CircleIcon sx={{ color: blue[500], fontSize: 15 }} />
                                    <Link href= {`/completed/${user?.uid}`} underline="none">
                                        Completed
                                    </Link>
                                </ListItem>
                                <ListItem disablePadding>
                                    <CircleIcon sx={{ color: yellow[500], fontSize: 15 }} />
                                    <Link href= {`/on-hold/${user?.uid}`} underline="none">
                                        On-Hold
                                    </Link>
                                </ListItem>
                                <ListItem disablePadding>
                                    <CircleIcon sx={{ color: red[500], fontSize: 15 }} />
                                    <Link href= {`/dropped/${user?.uid}`} underline="none">
                                        Dropped
                                    </Link>
                                </ListItem>
                                <ListItem disablePadding>
                                    <CircleIcon sx={{ color: grey[500], fontSize: 15 }} />
                                    <Link href= {`/planning/${user?.uid}`} underline="none">
                                        Planning to play
                                    </Link>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </div>

    )
};

export default UserList;