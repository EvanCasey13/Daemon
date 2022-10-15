import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function GameAdditionDetail() {

  let params = useParams();
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const data = await fetch(`https://rawg.io/api/games/${params.id}?token&key=${process.env.REACT_APP_RAWG_API_KEY}`)
    const detailData = await data.json();
    setDetails(detailData);
  }

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <div className="gameDetailsPage">
      <Box sx={{ flexGrow: 1, width: 1500 }}>
        <Grid container spacing={1} >
          <Grid item xs={4} sm={6} md={12} >
            <h2>{details.name}</h2>
            <img src={details.background_image} />
            <div className="gameStats">
              <p>Released: {details.released}</p>
              <p>Rating: {details.rating}</p>
              <p>Metacritic: {details.metacritic} %</p>
              <p>Playtime: {details.playtime} hours</p>
              <p>Achievements: {details.achievements_count}</p>
              <p>Developer: {details.developers?.map(dev => dev.name + " ")}</p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3>Description</h3>
            <p className='descriptionGame'>{details.description_raw}</p>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
};

export default GameAdditionDetail;