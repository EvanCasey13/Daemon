// A component that return a Game
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Box from '@mui/material/Box';
import 'reactjs-popup/dist/index.css';
import { auth, db } from "../../Firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const GenreGame = ({ game }) => {

  const [user, loading, error] = useAuthState(auth);
  const [status, setStatus] = React.useState('');
  const [rating, setRating] = React.useState('');

  const addToList = async () => {
    try {
      const docRef = await addDoc(
        collection(db, "users", user.uid, "favourites"),
        {
          game: game,
          Status: status,
          Rating: rating
        }
      );
    } catch (err) {
      console.error(err);
      alert("An error occured while adding a game");
    }
  }

  return (
    <div className="HomeComponent">
      <Grid container style={{ display: 'grid' }}>
        <Grid item>
          <Box sx={{ boxShadow: 3 }} >
            <Card style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
              <Link to={`/games/${game.id}`}>
                <CardMedia
                  sx={{ height: 300 }}
                  image={game.background_image}
                />
              </Link>
              <CardContent style={{
                paddingBottom: "10%",
                maxHeight: "100px"
              }}>
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
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default GenreGame;