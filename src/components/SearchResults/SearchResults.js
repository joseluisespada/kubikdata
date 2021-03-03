import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    backgroundColor: theme.palette.background.secondary,
    padding: '20px',
    marginBottom: '80px',
    borderRadius: '8px'
  },
  title: {
    fontSize: 14,
    fontWeigh: "bold",
    color: theme.palette.secondary.main,
    display: "inline-block",
    marginRight: 15
  },
}));

export default function SearchResults({ results }) {
  const classes = useStyles();

  if (results.length < 1) return (
    <div className={classes.root}>    
      <Typography 
        variant="h6" 
        component="p" 
        className={classes.title} 
        color="textSecondary" 
        gutterBottom
      >
        It's not a match!
      </Typography>   
    </div>
  )

  return (
    <div className={classes.root}>
      {results.map(obj => (
        <Typography 
          key={obj.name}
          variant="h6" 
          component="p" 
          className={classes.title} 
          color="textSecondary" 
          gutterBottom
        >
          { obj.name }
        </Typography>
      ))}
    </div>
  );
}

SearchResults.propTypes = {
  results: PropTypes.array
};