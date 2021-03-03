import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import axios from "axios";
import { 
  Header,
  Progress,
  Search,
  EpisodesList,
  Message,
  SearchResults
} from 'components';
import { 
  FILMS_URL,
  PLANETS_URL
} from "../../constants";
import { 
  getSearchUrl, 
  compareTitle 
} from '../../utils';

const initialState = [];

const actions = {
  SET_DATA: "SET_DATA",
  SET_CHARACTERS: "SET_CHARACTERS"
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_DATA:
      return action.payload.sort(compareTitle);
    case actions.SET_CHARACTERS:
      return state.map(episode => {
        if (episode.episode_id === action.payload.episodeId) {
          return { ...episode, charactersData: action.payload.data }
        };
        return episode;
      });
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [currentEpisodeId, setCurrentEpisodeId] = useState(undefined);
  const [characterSelected, setCharacterSelected] = useState(undefined);
  const [searchResults, setSearchResults] = useState(undefined);
  const [isError, setIsError] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch Episodes
  useEffect(() => {
    async function fetchEpisodes() {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(FILMS_URL);

        dispatch({
          type: actions.SET_DATA,
          payload: result.data.results
        })

        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    }
    fetchEpisodes();
  }, []);

  // Fetch Characters
  function findCharacters(film) {
    const dataExists = state.find(movie => movie.url === film.url).charactersData;
    if (dataExists && dataExists.length > 0) return;

    setIsLoading(true);
    Promise.all(
      film.characters.map(async url => {
        try {
          const res = await axios(url);
          return res.data
        } catch (error) {
          console.log("Error trying to fetch characters");
          return;
        }
      })
    ).then(response => {
      dispatch({
        type: actions.SET_CHARACTERS,
        payload: {
          episodeId: film.episode_id,
          data: response
        }
      });
      setIsLoading(false);
    }).catch(error => {
      setIsError(true);
      console.log("error", error)
    })

    setCurrentEpisodeId(film.episode_id)
  }

  function searchCharacters(film) {
    findCharacters(film);
    setCurrentEpisodeId(film.episode_id);
  }

  function findMovies(movies) {
    movies.forEach(movieUrl => {
      const film = state.find(f => f.url === movieUrl)
      findCharacters(film)
    })
  }

  function onCharacterClick(character) {
    setCharacterSelected(character.name);
    findMovies(character.films);    
  }

  async function getSearch(text, option) {
    setIsError(false);
    setIsLoading(true);

    if (text.length < 1) {
      setIsLoading(false);
      return setSearchResults(undefined);
    }

    try {
      const result = await axios(getSearchUrl(text,option));
      setSearchResults(result.data.results);      
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      console.log("error", error)
    }
  }

  return (
    <Container maxWidth="sm">
      <Header text="Search Star Wars episodes and characters" />

      {isLoading && <Progress /> }

      {isError && (
        <Message
          open={isError}
          handleClose={() => setIsError(false)}
          type="error"
          text="It's been an error"
        />
      )}

      <Search getSearch={getSearch} />

      {!isError && searchResults && (
        <SearchResults 
          results={searchResults}
        />
      )}

      {!isError && (
        <EpisodesList 
          episodes={state} 
          searchCharacters={searchCharacters}
          currentEpisodeId={currentEpisodeId}
          onCharacterClick={onCharacterClick}
          characterSelected={characterSelected}
        />
      )}
        
    </Container>
  );
}
//<Search getSearch={getSearch} />