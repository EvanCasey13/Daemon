import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { green, blue, yellow, red, grey } from '@mui/material/colors';
import { auth } from "../../Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import CircleIcon from '@mui/icons-material/Circle';
import Stack from '@mui/material/Stack';
import './User.css'

const UserList = () => {

    const [user, loading, error] = useAuthState(auth);
    
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
                        padding: 1.5,
                        margin: 0,
                    }}
                >
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
                                    <Link href="#" underline="none">
                                        Completed
                                    </Link>
                                </ListItem>
                                <ListItem disablePadding>
                                    <CircleIcon sx={{ color: yellow[500], fontSize: 15 }} />
                                    <Link href="#" underline="none">
                                        On-Hold
                                    </Link>
                                </ListItem>
                                <ListItem disablePadding>
                                    <CircleIcon sx={{ color: red[500], fontSize: 15 }} />
                                    <Link href="#" underline="none">
                                        Dropped
                                    </Link>
                                </ListItem>
                                <ListItem disablePadding>
                                    <CircleIcon sx={{ color: grey[500], fontSize: 15 }} />
                                    <Link href="#" underline="none">
                                        Planning to play
                                    </Link>
                                </ListItem>
                            </List>
                        </Grid>

                        <List>
                            <Stack direction="row" spacing={4} divider={<Divider orientation="vertical" flexItem />}>
                                <ListItem disablePadding>
                                <h4>Total Games</h4>
                                </ListItem>
                                <ListItem disablePadding>
                                <h4>Replayed</h4>
                                </ListItem>
                            </Stack>
                        </List>
                    </Grid>
                </Paper>
            </Box>
        </div>

    )
};

export default UserList;