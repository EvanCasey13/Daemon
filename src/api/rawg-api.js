/**
 * 
 * @returns The keyword async before a function makes it return a promise, the keyword await makes the function wait for a promise.
 * Functions here are awaiting the promise of receiving data from the API to return the required promise of the results array of data from the json object.
 */
export const fetchPopular = async () => {
    const res = await fetch(
        `https://rawg.io/api/games?token&key=${process.env.REACT_APP_RAWG_API_KEY}`
    );
    const json = await res.json();
    return json.results;
};

export const fetchGenres = async () => {
    const res = await fetch(
        `https://rawg.io/api/genres?token&key=${process.env.REACT_APP_RAWG_API_KEY}`
    );
    const json = await res.json();
    return json.results;
};

export const fetchPlatforms = async () => {
    const res = await fetch(
        `https://rawg.io/api/platforms?token&key=${process.env.REACT_APP_RAWG_API_KEY}`
    );
    const json = await res.json();
    return json.results;
};

export const fetchDevelopers = async () => {
    const res = await fetch(
        `https://rawg.io/api/developers?token&key=${process.env.REACT_APP_RAWG_API_KEY}`
    );
    const json = await res.json();
    return json.results;
};

export const fetchDetails = async (id) => {
    const data = await fetch(`https://rawg.io/api/games/${id}?token&key=${process.env.REACT_APP_RAWG_API_KEY}`);
    const detailData = await data.json();
    return detailData;
}

export const fetchPlatformDetails = async (id) => {
    const data = await fetch(`https://rawg.io/api/platforms/${id}?token&key=${process.env.REACT_APP_RAWG_API_KEY}`);
    const platformDetailData = await data.json();
    return platformDetailData.results;
}

export const fetchGenreDetails = async (id) => {
    const data = await fetch(`https://rawg.io/api/genres/${id}?token&key=${process.env.REACT_APP_RAWG_API_KEY}`);
    const genreDetailData = await data.json();
    return genreDetailData.results;
}

export const fetchDeveloperDetails = async (id) => {
    const data = await fetch(`https://rawg.io/api/developers/${id}?token&key=${process.env.REACT_APP_RAWG_API_KEY}`);
    const developerDetailData = await data.json();
    return developerDetailData.results;
}