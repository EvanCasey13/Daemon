import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DeveloperDetails() {

    let params = useParams();
    const  [developerDetail, setDeveloperDetails] = useState([]);

    const fetchDeveloperDetail = async () => {
    const data = await fetch(`https://rawg.io/api/developers/${params.id}?token&key=0532a1e505284b338b68cf1f1dcdee02`)
    const developerDetailData = await data.json();
    setDeveloperDetails(developerDetailData);
    }

    useEffect(() => {
        fetchDeveloperDetail();
    }, [params.id]);

    return(
      <div className="detailsPage">
        <h2>{developerDetail.name}</h2>
        <h5>Games Count: {developerDetail.games_count}</h5>
        <img src = {developerDetail.image_background} />
      </div>
    )
};

export default DeveloperDetails;