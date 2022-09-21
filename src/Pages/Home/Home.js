import React, { useState, useEffect } from 'react';
import Game from '../../Components/Game';
import Genre from '../../Components/Genre';
import Platform from '../../Components/Platforms';
import Developer from '../../Components/Developers';
import Slider from "react-slick";
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
    const [popular, setPopular] = useState([]);
    const [genres, setGenres] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [developers, setDevelopers] = useState([]);

    const url = "https://rawg.io/api/games?token&key=8a8630a556d54818aeb790b5e9c140c1";
    const genresUrl= "https://rawg.io/api/genres?token&key=8a8630a556d54818aeb790b5e9c140c1";
    const platformUrl="https://rawg.io/api/platforms?token&key=8a8630a556d54818aeb790b5e9c140c1";
    const developersUrl="https://rawg.io/api/developers?token&key=8a8630a556d54818aeb790b5e9c140c1";

    const settings = {
        infinite: true,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    };

    useEffect(() => {
        fetchPopular();
    }, []);

    useEffect(() => {
        fetchGenres();
    }, []);

    useEffect(() => {
        fetchPlatforms();
    }, []);

    useEffect(() => {
        fetchDevelopers();
    });

    const fetchPopular = async () => {
        const data = await fetch(url);
        const games = await data.json();
        console.log(games.next);
        setPopular(games.results);
    };

    const fetchGenres = async () => {
      const data = await fetch(genresUrl);
      const genres = await data.json();
      console.log(genres.results);
      setGenres(genres.results);
    };

     const fetchPlatforms = async () => {
        const data = await fetch(platformUrl);
        const platforms = await data.json();
        setPlatforms(platforms.results);
     };

     const fetchDevelopers = async () => {
        const data = await fetch(developersUrl);
        const developers = await data.json();
        setDevelopers(developers.results);
     };

    return (
        <div className='Home' >
            <h2>Popular Games</h2>
            <div className="popular-games">
                <Slider {...settings}>
                    {popular.map(game => {
                        return <Game
                            key={game.id} game={game}
                        />;
                    })}
                </Slider>
            </div>

            <h3>Genres</h3>
            <div className="genres">
                <Slider {...settings}>
                    {genres.map(genre => {
                        return <Genre
                            key={genre.id} genre={genre}
                        />;
                    })}
                </Slider>
            </div>

            <h3>Platforms</h3>
            <div className="Platforms">
                <Slider {...settings}>
                    {platforms.map(platform => {
                        return <Platform
                            key={platform.id} platform={platform}
                        />;
                    })}
                </Slider>
            </div>

            <h3>Developers</h3>
            <div className="Developers">
                <Slider {...settings}>
                    {developers.map(developer => {
                        return <Developer
                            key={developer.id} developer={developer}
                        />;
                    })}
                </Slider>
            </div>
        </div>
    );

}

export default Home;