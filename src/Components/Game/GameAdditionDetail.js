import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Badge, Image, Avatar, Popover, Grid } from "@nextui-org/react";

const GameAdditionDetail = ({game}) => {

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
          <Text h5>
            {game.name}
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
                {p.name}
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
          <Badge size="sm" enableShadow disableOutline color="error">ESRB Rating: {game.esrb_rating.name}</Badge>
        </Grid>
        <Text css={{ paddingLeft: "2%" }}>
          {game.description_raw}
        </Text>
      </Grid.Container>
    </div>
  )
};

export default GameAdditionDetail;