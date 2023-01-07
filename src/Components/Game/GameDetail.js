import React from 'react';
import Grid from "@mui/material/Grid";
import { Text, Badge, Image, Avatar, Popover, Link } from "@nextui-org/react";
import "./Game.css"

const GameDetail = ({ game }) => {
  return (
    <div className="gameDetailsPage">
      <Grid container spacing={1}>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
          <Text h3 css={{ textAlign:"center" }}>
            {game.name}
          </Text>
          <Image
            width="100%"
            height="100%"
            src={game.background_image}
            alt="game_image"
            objectFit="cover"
          />
        </Grid>
        <Text h4 css={{ float: "right", marginTop: "4%", paddingLeft: "2.2%" }}>
          Publishers:
          {game.publishers?.map(p =>
            <Popover placement='top'>
              <Popover.Trigger>
              <Badge color="white" isSquared size="xs" placement="bottom-right">
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
          <br/>
          Genres:
          {game.genres?.map(g =>
            <Badge size="sm" enableShadow disableOutline color="warning">{g.name}</Badge>
          )}
          <br/>
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
          <Text>
        <Link href={game.website} color="error" underline isExternal>
          {game.name} Website
        </Link>
      </Text>
        </Text>
        <Text css={{ paddingLeft: "2%" }}>
          {game.description_raw}
        </Text>
      </Grid>
    </div>

  )
};

export default GameDetail;