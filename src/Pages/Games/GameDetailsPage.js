import React from "react";
import { useParams, useLocation, Link } from 'react-router-dom';
import GameDetails from "../../Components/Game/GameDetail";
import PageTemplate from '../../Components/GamePageTemplate/gamePageTemplate';
import { fetchDetails } from '../../api/rawg-api'
import { useQuery } from "react-query";
import NavBar from "../../Components/Navbar/Navbar"
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const GameDetailsPage = (props) => {
  const { id } = useParams();
  const { data: game, error, isLoading, isError } = useQuery(["game", { id: id }], fetchDetails);
  const breadcrumbs = useBreadcrumbs();
  const location = useLocation();
  if (isLoading) {
    return <h1>Retreiving game details....</h1>
  }

  if (isError) {
    return <h1>Failed to retrieve game details</h1>;
  }

  return (
    <>
      <NavBar />
      <nav>
        <Link to="/"
          className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
        >
          Home/
        </Link>
        <Link to="/GameHomePage"
          className={location.pathname.startsWith("/gamehomepage") ? "breadcrumb-active" : "breadcrumb-not-active"}
        >
          GamesPage/
        </Link>
        <Link to="/gamehomepage"
          className={location.pathname.startsWith("/games/") ? "breadcrumb-active" : "breadcrumb-not-active"}
        >
          {id}
        </Link>
      </nav>
      {game ? (
        <>
          <PageTemplate game={game}>
            <GameDetails game={game} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for game details</p>
      )}
    </>
  );
};

export default GameDetailsPage;