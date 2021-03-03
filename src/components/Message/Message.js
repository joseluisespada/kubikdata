import React from 'react';
import PropTypes from "prop-types";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Message({ text, open, handleClose, type }) {
  return (
	  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type}>
        {text}
      </Alert>
    </Snackbar>
  );
}

Message.propTypes = {
  text: PropTypes.string,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  type: PropTypes.oneOf([
    "warning",
    "success",
    "error"
  ])
};