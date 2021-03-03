import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import { SEARCH_OPTIONS } from "../../constants";;

const useStyles = makeStyles(theme => ({
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.background.secondary,
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '8px'
  },
  textField: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 250,
  },
  input:{
    color: theme.palette.primary.main
  },
  label:{
    color: theme.palette.primary.main
  },
}));

export default function Search({ getSearch }) {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [option, setOption] = React.useState(SEARCH_OPTIONS[0]);

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  const onSearch = (value) => {
    setText(value);
    getSearch(value, option);
  };

  return (
    <form className={classes.main} noValidate autoComplete="off">
      <FormControl component="fieldset">
        <FormLabel component="legend">Search Options</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={option} onChange={handleChange}>
          {SEARCH_OPTIONS.map(opt => (
            <FormControlLabel key={opt} value={opt} control={<Radio />} label={opt} />
          ))}
        </RadioGroup>
      </FormControl>

      <TextField
        id="search"
        label="Search"
        placeholder="Search"
        value={text}
        className={classes.textField}
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
        InputLabelProps={{
          className: classes.label
        }}        
        onChange={ e => {
          e.preventDefault();
          onSearch(e.target.value)
        }}                 
      />
    </form>
  )
}

Search.propTypes = {
  getSearch: PropTypes.func
};