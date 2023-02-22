import React from "react";
import { useParams } from 'react-router-dom';
import GameAdditionDetail from "../../Components/Game/GameAdditionDetail";
import PageTemplate from '../../Components/GamePageTemplate/gamePageTemplate';
import { fetchDetails } from '../../api/rawg-api'
import { useQuery } from "react-query";
import NavBar from "../../Components/Navbar/Navbar"

const GameDetailsPage = (props) => {
  const { id } = useParams();
  const { data: game, error, isLoading, isError } = useQuery(["game", { id: id }],fetchDetails);

  if (isLoading) {
    return <h1>Retreiving game details....</h1>
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <NavBar />
      {game ? (
        <>
          <PageTemplate game={game}>
            <GameAdditionDetail game={game} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for game details</p>
      )}
    </>
  );
};

export default GameDetailsPage;