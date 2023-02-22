import React from "react";
import { Grid } from "@nextui-org/react";

const GamePageTemplate = ({ children }) => {

  return (
    <>
      <Grid.Container>
        <Grid xs={10} sm={10} md={10} lg={10} xl={10}>
          {children}
        </Grid>
      </Grid.Container>
    </>
  );
};

export default GamePageTemplate;