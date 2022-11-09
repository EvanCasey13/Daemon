// A component that return a Game
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
const Game = ({ game }) => {

  return (
    <div className="HomeComponent">
      <Link to={`/games/${game.id}`}>
        <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
          <CardMedia
            sx={{ height: 300 }}
            image={game.background_image}
          />
          <CardContent>
            <Grid container >
              <Grid item xs={20}>
                <Typography variant="h6" component="p">
                  {game.name}
                </Typography>
                <Typography variant="h6" component="p">
                  Rating: {game.rating}
                </Typography>
                <Typography variant="h6" component="p">
                  Released: {game.released}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default Game;