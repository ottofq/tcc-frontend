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
import PropTypes from 'prop-types';

const Transition = React.forwardRef(function Transition(props, ref) {
  // eslint-disable-next-line react/jsx-props-no-spreading
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

  const CloseModal = () => {
    setOpen(false);
  };

  const handleSubmitModal = () => {
    SubmitModal();
    CloseModal();
  };

  return (
    <div>
      <div>{cloneElement(children, { onClick: OpenModal })}</div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={CloseModal}
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

DialogExcluir.propTypes = {
  SubmitModal: PropTypes.func.isRequired,
  TitleDialog: PropTypes.string.isRequired,
  TextDialog: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
