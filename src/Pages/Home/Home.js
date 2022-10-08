import React, { useState, useEffect } from 'react';
import Game from '../../Components/Game/Game';
import Genre from '../../Components/Genre/Genres';
import Platform from '../../Components/Platform/Platforms';
import Developer from '../../Components/Developer/Developers';
import Slider from "react-slick";
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from 'react-router-dom';
import { fetchPopular, fetchGenres, fetchDevelopers, fetchPlatforms } from "../../api/rawg-api";

function Home() {

    const [popular, setPopular] = useState([]);
    const [genres, setGenres] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [developers, setDevelopers] = useState([]);
    const [details, setDetails] = useState({});
    const [platformDetails, setPlatformDetails] = useState([]);
    const [genreDetails, setGenreDetails] = useState([]);
    const [developerDetails, setDeveloperDetails] = useState([]);

    let params = useParams();

    const fetchDetails = async () => {
        const data = await fetch(`https://rawg.io/api/games/${params.id}?token&key=${process.env.REACT_APP_RAWG_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
    }

    useEffect(() => {
        fetchDetails();
    }, [params.id]);

    const fetchPlatformDetails = async () => {
        const data = await fetch(`https://rawg.io/api/platforms/${params.id}?token&key=${process.env.REACT_APP_RAWG_API_KEY}`);
        const platformDetailData = await data.json();
        setPlatformDetails(platformDetailData.results);
    }

    useEffect(() => {
        fetchPlatformDetails();
    }, [params.id]);

    const fetchGenreDetails = async () => {
        const data = await fetch(`https://rawg.io/api/genres/${params.id}?token&key=${process.env.REACT_APP_RAWG_API_KEY}`);
        const genreDetailData = await data.json();
        setGenreDetails(genreDetailData.results);
    }

    useEffect(() => {
        fetchGenreDetails();
    }, [params.id]);

    const fetchDeveloperDetails = async () => {
        const data = await fetch(`https://rawg.io/api/developers/${params.id}?token&key=${process.env.REACT_APP_RAWG_API_KEY}`);
        const developerDetailData = await data.json();
        setDeveloperDetails(developerDetailData.results);
    }

    useEffect(() => {
        fetchDeveloperDetails();
    }, [params.id]);

    const settings = {
        infinite: true,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        lazyLoad: false,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true
    };

    useEffect(() => {
        fetchPopular().then(games => {
            setPopular(games);
        })
    }, []);

    useEffect(() => {
        fetchGenres().then(genres => {
            setGenres(genres);
        })
        }, []);

        useEffect(() => {
            fetchPlatforms().then(plaforms => {
                setPlatforms(plaforms);
            })
        }, []);

        useEffect(() => {
            fetchDevelopers().then(developers => {
                setDevelopers(developers);
            })
        }, []);

        return (
            <div className='Home' >
                <h2>Popular Games</h2>
                <div className="popular-games">
                    <Slider {...settings}>
                        {popular.map(game => {
                            return <Game
                                key={game.id} game={game} onClick={() => fetchDetails(game.id)}

                            />;
                        })}
                    </Slider>
                </div>

                <h3>Genres</h3>
                <div className="genres">
                    <Slider {...settings}>
                        {genres.map(genre => {
                            return <Genre
                                key={genre.id} genre={genre} onClick={() => fetchGenreDetails(genre.id)}
                            />;
                        })}
                    </Slider>
                </div>

                <h3>Platforms</h3>
                <div className="Platforms">
                    <Slider {...settings}>
                        {platforms.map(platform => {
                            return <Platform
                                key={platform.id} platform={platform} onClick={() => fetchPlatformDetails(platform.id)}
                            />;
                        })}
                    </Slider>
                </div>

                <h3>Developers</h3>
                <div className="Developers">
                    <Slider {...settings}>
                        {developers.map(developer => {
                            return <Developer
                                key={developer.id} developer={developer} onClick={() => fetchDeveloperDetails(developer.id)}
                            />;
                        })}
                    </Slider>
                </div>
            </div>
    )
};
                    
export default Home;