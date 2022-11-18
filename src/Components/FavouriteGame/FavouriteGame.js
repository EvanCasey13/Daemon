import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import 'reactjs-popup/dist/index.css';
import { CardActions, CardContent } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../Firebase/firebase";
import { collection, getDocs, deleteDoc, where, query } from "firebase/firestore";

const FavouriteGame = ({ game, rating, status, id }) => {

  const [user, loading, error] = useAuthState(auth);

    const deleteItem = async() => {
      if (user) {
      const d = query(collection(db, "users/" + user.uid + "/favourites"), where('game.id', '==', id));
      const docSnap = await getDocs(d);
      docSnap.forEach((doc) => {
        console.log(doc.data())
        deleteDoc(doc.ref);
      });
    }
  }

  return (
    <div className="FavouriteComponent">
      <Card style={{ display: 'block', justifyContent: 'space-between', flexDirection: 'column', backgroundColor: "#EEFFFF"}}>
        <Link to={`/games/${game.id}`}>
          <CardMedia
            sx={{ height: 170, width: 200, float: 'left' }}
            image={game.background_image}
          />
        </Link>
        <CardContent>
          <Typography sx={{ paddingTop: 7, paddingLeft: 2, float: "left" }}>{game.name}</Typography>
          <Typography sx={{ paddingTop: 7, paddingRight: 5, float: "right" }}>{rating}</Typography>
          <Typography sx={{ paddingTop: 7, paddingRight: 20, float: "right", }}>{status}</Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={() => { deleteItem() }} aria-label="delete" size="inherit">
            <DeleteIcon fontSize="inherit" sx={{ paddingTop: 3, paddingLeft: 5, float: 'right' }} />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}
export default FavouriteGame;