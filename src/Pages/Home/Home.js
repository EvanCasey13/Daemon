import React, { useContext } from 'react';
import './Home.css';
import { Navigate } from 'react-router-dom';
import { fetchPopularHome, fetchGenres, fetchPlatforms } from "../../api/rawg-api";
import AuthContext from "../../AuthContext";
import { useQuery } from 'react-query';
import NavBar from "../../Components/Navbar/Navbar"
import Game from '../../Components/Game/Game';
import Platform from '../../Components/Platform/Platforms'
import Genre from '../../Components/Genres/Genre';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/press-start-2p";

function Home() {

    const settings = {
        infinite: true,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        lazyLoad: false,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    const genreSettings = {
        infinite: true,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        lazyLoad: false,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        rows: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    const handleChange = (e, type, value) => {
        e.preventDefault();
        console.log((type, value));
    };

    const { user } = useContext(AuthContext);

    const genreResults = useQuery({ queryKey: ['genres'], queryFn: fetchGenres });

    const platformResults = useQuery({ queryKey: ['platforms'], queryFn: fetchPlatforms });

    const { data, error, isLoading, isError } = useQuery(['home/games'], () => fetchPopularHome(), { keepPreviousData: true });

    if (isLoading) {
        return <h1>Games loading...</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const games = data.results;

    const genres = genreResults.data.results;

    const platforms = platformResults.data.results;

    if (!user) {
        return <Navigate replace to="/login" />;
    }

    return (
        <div className='Home' >
            <NavBar />
            <br/>  <br/> <br/>
            <h2>Popular Games</h2>
            <div className="popular-games">
                <Slider {...settings}>
                    {games.map(game => {
                        return <Game
                            key={game.id} game={game}
                        />;
                    })}
                </Slider>
            </div>

            <h2>Genres</h2>
            <div className="genres">
                <Slider {...genreSettings}>
                    {genres.map(genre => {
                        return <Genre
                            key={genre.id} genre={genre}
                        />;
                    })}
                </Slider>
            </div>

            <h2>Platforms</h2>
            <div className="platforms">
                <Slider {...genreSettings}>
                    {platforms.map(platform => {
                        return <Platform
                            key={platform.id} platform={platform}
                        />;
                    })}
                </Slider>
            </div>     
        </div>
    )
};

export default Home;