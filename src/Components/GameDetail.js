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
  <h1>{details.description}</h1>
    )
};

export default GameDetail;