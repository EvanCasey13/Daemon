import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PlatformDetails() {

    let params = useParams();
    const  [platformDetail, setPlatformDetails] = useState([]);

    const fetchPlatformDetail = async () => {
    const data = await fetch(`https://rawg.io/api/platforms/${params.id}?token&key=0532a1e505284b338b68cf1f1dcdee02`)
    const platformDetailData = await data.json();
    setPlatformDetails(platformDetailData);
    }

    useEffect(() => {
        fetchPlatformDetail();
    }, [params.id]);

    return(
      <div className="detailsPage">
        <h2>{platformDetail.name}</h2>
        <h5>Games Count: {platformDetail.games_count}</h5>
        <img src = {platformDetail.image_background} />
      </div>
    )
};

export default PlatformDetails;