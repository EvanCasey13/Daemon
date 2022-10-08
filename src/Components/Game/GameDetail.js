import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function GameDetail() {

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

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="gameDetailsPage">

      <h2>{details.name}</h2>
      <Box sx={{ width: 600, typography: 'body1', float: 'right', paddingRight: 50 }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Overview" value="1" />
              <Tab label="Developer details" value="2" />
              <Tab label="Genres" value="3" />
              <Tab label="Tags" value="4" />
              <Tab label="Community" value="5" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className="gameStats">
              <h5>Released: {details.released}</h5>
              <h5>Rating: {details.rating}</h5>
              <h5>Metacritic: {details.metacritic} %</h5>
              <h5>Playtime: {details.playtime} hours</h5>
              <h5>Achievements: {details.achievements_count}</h5>
              <h6>Website</h6>
              <h5>{details.name} <a href ={details.website} target="_blank">Website</a></h5>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <h5>Developer: {details.developers?.map(dev => dev.name)}</h5>
            <h6>Games: {details.developers?.map(dev => dev.games_count)}</h6>
            <img src={details.developers?.map(dev => dev.image_background)} className="developerImg" />
          </TabPanel>
          <TabPanel value="3">
            {details.genres?.map( g =>
              <h5 className="genresDetails">{g.name}</h5>
            )}
          </TabPanel>
          <TabPanel value="4">
            {details.tags?.map(t => 
              <><h5 className ="tagName">{t.name}</h5><img src={t.image_background} className="tagImg" /></>
            )}        
          </TabPanel>
          <TabPanel value="5">
          <h5>{details.name}: <a href={details.reddit_url} target="_blank">Reddit</a></h5> 
          <h5>{details.reddit_description}</h5> 
          <div className="userStats">
          <h4>User game Statistics</h4> 
          <h5>Wishlist: {details?.added_by_status?.yet}</h5>      
          <h5>Owned: {details?.added_by_status?.owned}</h5>    
          <h5>Completed: {details?.added_by_status?.beaten}</h5>    
          <h5>Yet to play: {details?.added_by_status?.toplay}</h5>   
          <h5>Dropped: {details?.added_by_status?.dropped}</h5>    
          <h5>Currently Playing: {details?.added_by_status?.playing}</h5>   
          </div>   
          </TabPanel>
        </TabContext>
      </Box>
      <img src={details.background_image} />
      <h3>Description</h3>
      <p className='descriptionGame'>{details.description_raw}</p>

    </div>
  )
};

export default GameDetail;