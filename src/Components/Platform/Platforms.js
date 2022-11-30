// A component that return a Platform
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';

const Platform = ({ platform }) => {

    return (
        <div className="PlatformComponent">
            <Grid container style={{ display: 'grid' }}>
                <Grid item>
                    <Box sx={{ boxShadow: 3 }} >
                        <Card style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                            <Link to={`/platforms/${platform.id}`}>
                                <CardMedia
                                    sx={{ height: 120 }}
                                    image={platform.image_background}
                                />
                            </Link>
                            <CardContent style={{
                                paddingBottom: "10%",
                                maxHeight: "100px"
                            }}>
                                <Grid container >
                                    <Grid item xs={20}>
                                        <Typography variant="h6" component="p">
                                            {platform.name}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};
export default Platform;