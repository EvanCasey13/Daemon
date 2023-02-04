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

  export const fetchPopularHome = () => {
    return fetch(
        `https://rawg.io/api/games?&key=${process.env.REACT_APP_RAWG_API_KEY}&exclude_additions&ordering=-released&metacritic=80,100`
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

  export const fetchPopularByGenre = (genre, page, query) => {
    return fetch(
        `https://rawg.io/api/games?genres=${genre}&key=${process.env.REACT_APP_RAWG_API_KEY}&page_size=18&page=${page}&search=${query}&exclude_additions&ordering=-metacritic`
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

  export const fetchGamesByPlatform = (platform, page, query) => {
    return fetch(
        `https://rawg.io/api/games?platforms=${platform}&key=${process.env.REACT_APP_RAWG_API_KEY}&page_size=18&page=${page}&search=${query}&exclude_additions&ordering=-metacritic`
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

  export const fetchGameAdditions = (id) => {
    return fetch(
      `https://rawg.io/api/games/${id}/additions?token&key=${process.env.REACT_APP_RAWG_API_KEY}`
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

  export const fetchGameSeries = (id) => {
    return fetch(
      `https://rawg.io/api/games/${id}/game-series?token&key=${process.env.REACT_APP_RAWG_API_KEY}`
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

  export const fetchGameDevelopers = (id) => {
    return fetch(
      `https://rawg.io/api/games/${id}/development-team?token&key=${process.env.REACT_APP_RAWG_API_KEY}`
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

  export const fetchGameAchievements = (id) => {
    return fetch(
      `https://rawg.io/api/games/${id}/achievements?token&key=${process.env.REACT_APP_RAWG_API_KEY}`
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

  export const fetchGameStores = (id) => {
    return fetch(
      `https://rawg.io/api/games/${id}/stores?token&key=${process.env.REACT_APP_RAWG_API_KEY}`
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