import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Header({ text }) {
  return (
	  <Box my={4}>
	    <Typography variant="h6" component="h1" gutterBottom>
	      { text }
	    </Typography>
	  </Box>
  );
}