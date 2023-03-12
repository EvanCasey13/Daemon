import React from 'react';
import { useQuery } from 'react-query';
import { Text, Badge, Image, Avatar, Popover, Grid, Card, Row, Col, Collapse } from "@nextui-org/react";
import { useParams } from 'react-router-dom';
import "./Game.css"
import { fetchGameAdditions, fetchGameSeries, fetchGameDevelopers, fetchGameAchievements } from '../../api/rawg-api';
import Slider from "react-slick";
import { Link } from "react-router-dom";


const GameDetail = ({ game }) => {
  let params = useParams();
  const gameAdditionsResults = useQuery(['gameAdditions', params.id], () => fetchGameAdditions(params.id));
  const gameAdditions = gameAdditionsResults.data;

  const gameSeriesResults = useQuery(['gameSeries', params.id], () => fetchGameSeries(params.id));
  const gameSeries = gameSeriesResults.data;

  const gameDevelopersResults = useQuery(['gameDevelopers', params.id], () => fetchGameDevelopers(params.id));
  const gameDevelopers = gameDevelopersResults.data;

  const gameAchievementsResults = useQuery(['gameAchievements', params.id], () => fetchGameAchievements(params.id));
  const gameAchievements = gameAchievementsResults.data;

  const settings = {
    infinite: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: false,
    autoplay: true,
    autoplaySpeed: 4000,
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

  return (
    <div className="gameDetailsPage">
      <Grid.Container gap={1} >
        <Grid xs={0} sm={6} md={6} lg={8} xl={8} >
          <Image
            width="100%"
            height="100%"
            src={game.background_image}
            alt="game_image"
            objectFit="cover"
          />
        </Grid>
        <Grid css={{ float: "right", marginTop: "2%" }}>
          <Text h3>
            {game?.name}
          </Text>
          Publishers:
          {game.publishers?.map(p =>
            <Popover placement='top'>
              <Popover.Trigger>
                <Badge color="white" isSquared disableOutline size="xs" placement="bottom-right">
                  <Avatar
                    bordered
                    squared
                    size="lg"
                    color="error"
                    src={p.image_background}
                  />
                </Badge>
              </Popover.Trigger>
              <Popover.Content css={{ px: '$4', py: '$2' }}>
                {p?.name}
              </Popover.Content>
            </Popover>
          )}
          <br />
          Genres:
          {game.genres?.map(g =>
            <Badge size="sm" enableShadow disableOutline color="warning">{g.name}</Badge>
          )}
          <br />
          <Text h4>
            Game details
          </Text>
          <Text h5>
            Released: {game.released}
          </Text>
          <Text h5>
            Rating: {game.rating}
          </Text>
          <Text h5>
            Metacritic: {game.metacritic} %
          </Text>
          <Text h5>
            Playtime: {game.playtime} Hours
          </Text>
          <Text h5>
            Achievements: {game.parent_achievements_count}
          </Text>
          <Text h5>
            Total games in the series: {game.game_series_count} Games
          </Text>
       
        </Grid>
        <Collapse.Group>
          <Collapse title="Description" expanded>
            <Text css={{ paddingLeft: "2%" }}>
              {game.description_raw}
            </Text>
          </Collapse>
          <Collapse title="Developers">
            {gameDevelopers?.results.map(gameD =>
              <Text css={{ paddingLeft: "2%" }}>
                {gameD.name}
              </Text>
            )}
          </Collapse>
          <Collapse title="Achievements">
            <Grid.Container gap={1}>
              {gameAchievements?.results.map(gameA =>
                <Grid xs={12} sm={10} md={8} lg={6} xl={2} key={gameA.id}>
                  <Card css={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: 300, width: "100%" }} isHoverable>
                    <Card.Body css={{ p: 0 }}>
                      <Card.Image
                        src={gameA.image}
                        width="100%"
                        height={250}
                        objectFit="cover"
                        alt="Game series image"
                      />
                    </Card.Body>
                    <Card.Footer
                      isBlurred
                      css={{
                        position: "absolute",
                        bgBlur: "#ffffff66",
                        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                        bottom: 0,
                        zIndex: 1,
                      }}
                    >
                      <Row>
                        <Col>
                          <Text h3 color="#000" size={12}>
                            {gameA.name}
                          </Text>
                          <Text color="#000" size={12}>
                            {gameA.description}
                          </Text>
                        </Col>
                      </Row>
                    </Card.Footer>
                  </Card>
                </Grid>
              )}
            </Grid.Container>
          </Collapse>
        </Collapse.Group>
      </Grid.Container>

      <Text h2 css={{ textAlign: "center" }}>Related Additions</Text>
      <Slider {...settings}>
        {gameAdditions?.results.map(gameA =>
          <Card css={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} isHoverable>
            <Card.Body css={{ p: 0 }}>
              <Link to={`/gameAdditions/${gameA.id}`}>
                <Card.Image
                  src={gameA.background_image}
                  width="100%"
                  height={250}
                  objectFit="cover"
                  alt="Game addition image"
                />
              </Link>
            </Card.Body>
            <Card.Footer
              isBlurred
              css={{
                position: "absolute",
                bgBlur: "#ffffff66",
                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                bottom: 0,
                zIndex: 1,
              }}
            >
              <Row>
                <Col>
                  <Text color="#000" size={12}>
                    {gameA.name}
                  </Text>
                  <Text color="#000" size={12}>
                    Rating: {gameA.rating}
                  </Text>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        )}
      </Slider>

      <Text h2 css={{ textAlign: "center" }}>Related Games</Text>
      <Slider {...settings}>
        {gameSeries?.results.map(gameS =>
          <Card css={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} isHoverable>
            <Card.Body css={{ p: 0 }}>
              <Link to={`/games/${gameS.id}`}>
                <Card.Image
                  src={gameS.background_image}
                  width="100%"
                  height={250}
                  objectFit="cover"
                  alt="Game series image"
                />
              </Link>
            </Card.Body>
            <Card.Footer
              isBlurred
              css={{
                position: "absolute",
                bgBlur: "#ffffff66",
                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                bottom: 0,
                zIndex: 1,
              }}
            >
              <Row>
                <Col>
                  <Text color="#000" size={12}>
                    {gameS.name}
                  </Text>
                  <Text color="#000" size={12}>
                    Rating: {gameS.rating}
                  </Text>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        )}
      </Slider>
    </div>
  )
};

export default GameDetail;