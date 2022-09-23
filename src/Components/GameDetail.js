import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function GameDetail() {

    let params = useParams();
    const  [details, setDetails] = useState({});

    const fetchDetails = async () => {
    const data = await fetch(`https://rawg.io/api/games/${params.id}?token&key=0532a1e505284b338b68cf1f1dcdee02`)
    const detailData = await data.json();
    setDetails(detailData);
    }

    useEffect(() => {
        fetchDetails();
    }, [params.id]);

    return(
      <div className="gameDetailsPage">
        <h2>{details.name}</h2>
        <h5>Released: {details.released}</h5>
        <h5>Rating: {details.rating}</h5>
        <h5>Metacritic: {details.metacritic} %</h5>
        <h5>Playtime: {details.playtime} hours</h5>
        <h5>Achievements: {details.achievements_count}</h5>
        <img src = {details.background_image} />
        <h3>Description</h3>
        <p className='descriptionGame'>{details.description_raw}</p>
      </div>
    )
};

export default GameDetail;