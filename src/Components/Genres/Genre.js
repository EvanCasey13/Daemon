import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import 'reactjs-popup/dist/index.css';

const Genre = ({ genre }) => {

  return (
    <div className="GenreComponent">
      <Grid container style={{ display: 'grid' }}>
        <Grid item>
          <Box sx={{ boxShadow: 3 }} >
            <Card style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
              <Link to={`/genres/${genre.slug}`}>
                <CardMedia
                  sx={{ height: 120 }}
                  image={genre.image_background}
                />
              </Link>
              <CardContent style={{
                paddingBottom: "10%",
                maxHeight: "100px"
              }}>
                <Grid container >
                  <Grid item xs={20}>
                    <Typography variant="h6" component="p">
                      {genre.name}
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

export default Genre;