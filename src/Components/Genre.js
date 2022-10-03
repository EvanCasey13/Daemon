// A component that return a Genre
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Genre = ({ genre }) => {

    return (
        <div className="HomeComponent">
            <Link to={`/genres/${genre.id}`}>
                <Card sx={{ maxWidth: 345, height: '100%' }}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image={genre.image_background}
                    />
                    <CardContent>
                        <Grid container >
                            <Grid item xs={20}>
                                <Typography variant="h6" component="p">
                                    {genre.name}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Link>
        </div>
    );
};
export default Genre;