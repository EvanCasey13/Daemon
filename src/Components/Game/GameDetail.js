import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from "react-slick";

function GameDetail() {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [series, setSeries] = useState([]);
  const [addition, setAdditions] = useState([]);

  const settings = {
    infinite: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: false,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true
  };

  const fetchDetails = async () => {
    const data = await fetch(`https://rawg.io/api/games/${params.id}?token&key=${process.env.REACT_APP_RAWG_API_KEY}`)
    const detailData = await data.json();
    setDetails(detailData);
  }

  const fetchGameAdditions = async () => {
    const data = await fetch(`https://rawg.io/api/games/${params.id}/additions?token&key=${process.env.REACT_APP_RAWG_API_KEY}`);
    const additionData = await data.json();
    setAdditions(additionData.results)
  }

  const fetchGameSeries = async () => {
    const data = await fetch(`https://rawg.io/api/games/${params.id}/game-series?token&key=${process.env.REACT_APP_RAWG_API_KEY}`);
    const seriesData = await data.json();
    setSeries(seriesData.results)
  }

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  useEffect(() => {
    fetchGameAdditions();
  }, [params.id]);

  useEffect(() => {
    fetchGameSeries();
  }, [params.id]);

  return (
    <div className="gameDetailsPage">

      <Box sx={{ flexGrow: 1, width: 1500  }}>
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

            <h3>Description</h3>
            <p className='descriptionGame'>{details.description_raw}</p>
          </Grid>
        </Grid>     

      <h3>Related games</h3>
      <div className="related-games">
      <Slider {...settings}>
        {series.map(game =>
          <Link to={`/games/${game.id}`}>
            <Card sx={{  marginBottom: 5, marginLeft: 1 }}>
              <CardMedia
                sx={{ height: 150 }}
                image={game.background_image}
              />
              <CardContent>
                <Grid container >
                  <Grid item xs={20}>
                    <Typography variant="h6" component="p">
                      {game.name}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Link>
        )}
      </Slider>
      </div>
      
      <h3>Related DLC</h3>
      <div className="related-dlc">
      <Slider {...settings}>
        {addition.map(game =>
          <Link to={`/gameAdditions/${game.id}`}>
            <Card sx={{ marginBottom: 5, marginLeft: 1 }}>
              <CardMedia
                sx={{ height: 150 }}
                image={game.background_image}
              />
              <CardContent>
                <Grid container >
                  <Grid item xs={20}>
                    <Typography variant="h6" component="p">
                      {game.name}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Link>
        )}
      </Slider>
    </div>
    </Box>
    </div>
  )
};

export default GameDetail;