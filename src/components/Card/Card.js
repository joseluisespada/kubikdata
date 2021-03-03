import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CharacterList } from 'components';

const useStyles = makeStyles({
  root: props => ({
    height: "100%",
    outline: props.isActive ? "1px solid red" : ""
  }),
  title: props => ({
    fontSize: 14,
    fontWeigh: props.characters ? "bold" : "normal",
    color: props.characters ? "black" : "",
  }),
});

export default function SimpleCard(props) {
  const { episode, searchCharacters, characters, isActive, onCharacterClick, characterSelected } = props;
  const classes = useStyles(props);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" component="h2" className={classes.title} color="textSecondary" gutterBottom>
          { episode.title }
        </Typography>

        {characters && characters.length > 0 && 
            <CharacterList 
              characters={characters} 
              onCharacterClick={onCharacterClick} 
              characterSelected={characterSelected}
            />
        }
      </CardContent>
      <CardActions>
        <Button 
          size="small"
          onClick={e => {
            e.preventDefault();
            searchCharacters(episode);
          }}
        >
          Watch Characters
        </Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  episode: PropTypes.object,
  searchCharacters: PropTypes.func,
  characters: PropTypes.array,
  isActive: PropTypes.bool,
  onCharacterClick: PropTypes.func,
  characterSelected: PropTypes.string
};