// A component that return a Developer
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Developers = ({ developer }) => {

    return (
        <div className="HomeComponent">
            <Link to={`/developers/${developer.id}`}>
                <Card sx={{ maxWidth: 345, height: '100%' }}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image={developer.image_background}
                    />
                    <CardContent>
                        <Grid container >
                            <Grid item xs={20}>
                                <Typography variant="h6" component="p">
                                    {developer.name}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Link>
        </div>
    );
};
export default Developers;