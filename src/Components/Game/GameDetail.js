import React from 'react';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
const GameDetail = ({ game }) => {
  return (
    <div className="gameDetailsPage">
      <Grid container spacing={1} sx={{ paddingTop: "10%" }}>
        <Paper
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: 0.5,
            margin: 0,
          }}
        >

          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
            <ImageList
              cols={1}>
              <Typography variant="h4" component="h3" className='nameDetailsPage'>
                {game.name}
              </Typography>
              <ImageListItem cols={1}>
                <img
                  src={game.background_image}
                  alt="game_image"
                />
              </ImageListItem>
            </ImageList>
          </Grid>
        </Paper>
        <>
          <Typography variant="h6" component="p" className='descriptionGame'>
            {game.description_raw}
          </Typography>
        </>
      </Grid>
    </div>

  )
};

export default GameDetail;