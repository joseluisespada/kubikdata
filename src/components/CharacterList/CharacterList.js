import React from 'react';
import PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';
import Slide from 'react-reveal/Slide';
import { Character } from 'components';

export default function CharacterList({ characters, onCharacterClick, characterSelected }) {
  return (
  	<Slide right>
	{characters.map(character => {
      return <Character 
      			key={character.url} 
      			character={character} 
      			onCharacterClick={onCharacterClick} 
      			characterSelected={characterSelected}
      		 />
    })}
    </Slide>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.array,
  onCharacterClick: PropTypes.func,
  characterSelected: PropTypes.string
};