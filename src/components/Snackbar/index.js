import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { useDispatch, useSelector } from 'react-redux';
import { clearSnackbar } from 'redux/modules/snackbar/actions';

function Alert(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SuccessSnackbar() {
  const dispatch = useDispatch();

  const { message, isOpen, type } = useSelector(state => state.snackbar);

  function handleClose() {
    dispatch(clearSnackbar());
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isOpen}
      autoHideDuration={3000}
      onClose={handleClose}
      aria-describedby="client-snackbar"
    >
      <Alert onClose={handleClose} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
}
