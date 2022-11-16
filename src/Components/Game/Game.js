// A component that return a Game
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './Game.css'
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import { auth, db } from "../../Firebase/firebase";
import { query, collection, addDoc,setDoc, doc, where, documentId } from "firebase/firestore";

const Game = ({ game }) => {

  const [user, loading, error] = useAuthState(auth);

  const addToList = async () => {
    console.log(documentId)
   try {
    const docRef = await addDoc(
      collection(db, "users", documentId, "favourites"),
      {
       gameName: game.name
      }
    );
    } catch (err) {
      console.error(err);
      alert("An error occured while adding a game");
    }
  }

  const [status, setStatus] = React.useState('');
  const [rating, setRating] = React.useState('');

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  return (
    <div className="HomeComponent">

      <Card style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
        <Link to={`/games/${game.id}`}>
          <CardMedia
            sx={{ height: 300 }}
            image={game.background_image}
          />
        </Link>
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
        <Popup
          trigger={<Button className="button" variant="contained">Add to list</Button>}
          modal
          nested
        >
          {close => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="header"> Add game to your list</div>
              <div className="content">
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  minHeight="50vh"
                >
                  <FormControl sx={{ width: '35ch' }}>
                  <h2>Game title</h2>
                    <Typography variant="h6" component="p">
                      {game.name}
                    </Typography>
                    <div className="status-select">
                      <Select
                        labelId="select-status"
                        id="select-status"
                        label="Status"
                        variant="outlined" size="small" fullWidth
                        value={status}
                        onChange={handleStatusChange}
                      >
                        <MenuItem value="Completed">Completed</MenuItem>
                        <MenuItem value="Playing">Playing</MenuItem>
                        <MenuItem value="Plan to play">Plan to play</MenuItem>
                        <MenuItem value="Dropped">Dropped</MenuItem>
                        <MenuItem value="On-Hold">On-Hold</MenuItem>
                      </Select>
                    </div>
                    <div className="rating-select">
                      <Select
                        labelId="rating-status"
                        id="rating-status"
                        label="Rating"
                        variant="outlined" size="small" fullWidth
                        value={rating}
                        onChange={handleRatingChange}
                      >
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                      </Select>
                    </div>
                  </FormControl>
                </Box>
              </div>
              <div className="actions">
                <Button
                  className="button"
                  onClick={() => {
                    addToList()
                  }}
                >
                  Submit
                </Button>
              </div>
            </div>
          )}
        </Popup>
      </Card>
    </div>
  );
};

export default Game;