import React from 'react';
import { fetchGenres } from "../../api/rawg-api";
import { useQuery } from 'react-query';
import Genre from './Genre';
import Grid from "@mui/material/Grid";

const GenreList = () => {

    const { data, error, isLoading, isError } = useQuery(['genres'], () => fetchGenres(), { keepPreviousData: true })

    if (isLoading) {
        return <h1>Games loading...</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const genres= data.results;

        let genreItems = genres?.map((g) => (
          <Grid key={g.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Genre key={g.id} genre={g} />
          </Grid>
        ));
        return genreItems;
};

export default GenreList;