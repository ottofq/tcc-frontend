import React, { useState, cloneElement } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogExcluir({
  SubmitModal,
  TitleDialog,
  TextDialog,
  children,
}) {
  const [open, setOpen] = useState(false);

  const OpenModal = () => {
    setOpen(true);
  };
  const handleSubmitModal = () => {
    SubmitModal();
    CloseModal();
  };

  const CloseModal = () => {
    setOpen(false);
  };
  return (
    <div>
      <div>{cloneElement(children, { onClick: OpenModal })}</div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={CloseModal}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{TitleDialog}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {TextDialog}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={CloseModal} variant="contained" color="default">
            Não
          </Button>
          <Button
            onClick={handleSubmitModal}
            variant="contained"
            color="secondary"
          >
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
