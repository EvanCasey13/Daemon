import React from "react";
import Grid from "@mui/material/Grid";

const TemplateGamePage = ({ children }) => {


  return (
    <>
      <Grid container spacing={3} sx={{ padding: "5px" }}>

        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateGamePage;