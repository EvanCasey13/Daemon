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
        {breadcrumbs.map(({ match, breadcrumb }) => (
          <Link
            key={match.url}
            to={match.url}
            className={match.pathname === location.pathname ? "breadcrumb-active" : "breadcrumb-not-active"}
          >
            {breadcrumb}/
          </Link>
        ))}
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