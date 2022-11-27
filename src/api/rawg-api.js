export const fetchPopular = (page, query) => {
    return fetch(
        `https://rawg.io/api/games?token&key=${process.env.REACT_APP_RAWG_API_KEY}&page=${page}&page_size=18&search=${query}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };

  export const fetchPopularHome = (page) => {
    return fetch(
        `https://rawg.io/api/games?&key=${process.env.REACT_APP_RAWG_API_KEY}&page=${page}&page_size=18`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };

  export const fetchGenres = () => {
    return fetch(
        `https://rawg.io/api/genres?token&key=${process.env.REACT_APP_RAWG_API_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };

  export const fetchPopularByGenre = (genre) => {
    return fetch(
        `https://rawg.io/api/games?genres=${genre}&key=${process.env.REACT_APP_RAWG_API_KEY}&page_size=18`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };

  export const fetchPlatforms = () => {
    return fetch(
        `https://rawg.io/api/platforms?token&key=${process.env.REACT_APP_RAWG_API_KEY}&page_size=18`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };

  export const fetchDevelopers = () => {
    return fetch(
        `https://rawg.io/api/developers?token&key=${process.env.REACT_APP_RAWG_API_KEY}&page_size=18`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };

export const fetchDetails = (args) => {
    // console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
        `https://rawg.io/api/games/${id}?token&key=${process.env.REACT_APP_RAWG_API_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const fetchPlatformDetails = (args) => {
    // console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://rawg.io/api/platforms/${id}?token&key=${process.env.REACT_APP_RAWG_API_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const fetchGenreDetails = (args) => {
    // console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://rawg.io/api/genres/${id}?token&key=${process.env.REACT_APP_RAWG_API_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const fetchDeveloperDetails = (args) => {
    // console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://rawg.io/api/developers/${id}?token&key=${process.env.REACT_APP_RAWG_API_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };