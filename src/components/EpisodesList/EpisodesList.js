import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card } from 'components';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

export default function EpisodesList(props) {
  const classes = useStyles();
  const { episodes, searchCharacters, currentEpisodeId, onCharacterClick, characterSelected } = props;

  return (
    <Grid container className={classes.root} spacing={2}>
      {episodes.map(episode => {
        return (
          <Grid item xs={12} key={episode.episode_id}>
            <Card 
              episode={episode}
              searchCharacters={searchCharacters} 
              characters={episode.charactersData}
              isActive={currentEpisodeId === episode.episode_id}
              onCharacterClick={onCharacterClick}
              characterSelected={characterSelected}
            />
          </Grid>
        )
      })}
    </Grid>
  );
}

EpisodesList.propTypes = {
  episodes: PropTypes.arrayOf(PropTypes.shape({
    characters: PropTypes.array,
    charactersData: PropTypes.array,
    episode_id: PropTypes.number,
    title: PropTypes.string
  })),
  searchCharacters: PropTypes.func,
  currentEpisodeId: PropTypes.number,
  onCharacterClick: PropTypes.func,
  characterSelected: PropTypes.string
};