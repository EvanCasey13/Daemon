import React from "react";
import Platform from "./Platforms";
import { Grid } from "@nextui-org/react";

const PlatformList = ({ platforms }) => {
  let platformCards = platforms?.map((p) => (
    <Grid key={p.id} xs={6} sm={4} md={4} lg={2} xl={2} css={{ padding:"1%"}}>
      <Platform key={p.id} platforms={p} />
    </Grid>
  ));
  return platformCards;
};

export default PlatformList;