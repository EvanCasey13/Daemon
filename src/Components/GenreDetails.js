import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function GenreDetails() {

    let params = useParams();
    const  [genreDetail, setGenreDetails] = useState([]);

    const fetchGenreDetail = async () => {
    const data = await fetch(`https://rawg.io/api/genres/${params.id}?token&key=0532a1e505284b338b68cf1f1dcdee02`)
    const genreDetailData = await data.json();
    setGenreDetails(genreDetailData);
    }

    useEffect(() => {
        fetchGenreDetail();
    }, [params.id]);

    return(
      <div className="detailsPage">
        <h2>{genreDetail.name}</h2>
        <h5>Games Count: {genreDetail.games_count}</h5>
        <img src = {genreDetail.image_background} />
      </div>
    )
};

export default GenreDetails;