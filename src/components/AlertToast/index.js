import React, { useState, useEffect } from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

export default function AlertToast({ typeMessage, message }) {
  const [state, setState] = useState({
    open: false,
    type: '',
    content: '',
  });

  useEffect(() => {
    setState({ type: typeMessage, content: message, open: true, alert: true });
  }, [typeMessage, message]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setState({ open: false });
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={2000}
      open={state.open}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} variant="filled" severity={state.type}>
        {state.content}
      </Alert>
    </Snackbar>
  );
}
