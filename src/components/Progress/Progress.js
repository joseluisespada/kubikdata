import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    left: "50%",
    top: "50%"
  },
}));

export default function Progress() {
  const classes = useStyles();
  return (
	  <div className={classes.root}>
	    <CircularProgress />
	  </div>
  );
}