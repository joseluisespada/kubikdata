import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  name: props => ({
    cursor: "pointer",
    color: props.characterSelected === props.character.name && "red",
    '&:hover': {
      color: theme.palette.primary.dark
    }
  })
}));

export default function Character(props) {
  const { character, onCharacterClick, characterSelected } = props;
  const classes = useStyles(props);

  return (
	  <Typography 
      variant="body1" 
      component="p" 
      color="textSecondary" 
      gutterBottom
      className={classes.name}
      onClick={e => {
        e.preventDefault();
        onCharacterClick(character)
      }}
    >
      { character.name }
    </Typography>
  );
}

Character.propTypes = {
  character: PropTypes.object,
  onCharacterClick: PropTypes.func,
  characterSelected: PropTypes.string
};