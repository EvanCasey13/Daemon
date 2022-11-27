import React from "react";
import GenreList from "./genreList";
import Grid from "@mui/material/Grid";

function GenreListPage({ genres }) {
    return (
        <div className="GameListPageTemplate">
            <Grid container sx={{ padding: '10px' }}>
                <Grid item container spacing={2}>
                    <GenreList genres={genres}></GenreList>
                </Grid>
            </Grid>
        </div>
    );
}
export default GenreListPage;