import React from 'react';
import {
  CircularProgress,
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

export default function ModalDelete({
  SubmitModal,
  TitleDialog,
  TextDialog,
  loading,
  openModal,
  setOpenModal,
}) {
  return (
    <div>
      <Dialog
        open={openModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpenModal(!openModal)}
      >
        {loading ? (
          <DialogContent>
            <CircularProgress color="primary" />
          </DialogContent>
        ) : (
          <>
            <DialogTitle>{TitleDialog}</DialogTitle>
            <DialogContent>
              <DialogContentText>{TextDialog}</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => setOpenModal(!openModal)}
                variant="contained"
                color="default"
              >
                Não
              </Button>
              <Button
                onClick={SubmitModal}
                variant="contained"
                color="secondary"
              >
                Sim
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
}

ModalDelete.propTypes = {
  SubmitModal: PropTypes.func.isRequired,
  TitleDialog: PropTypes.string.isRequired,
  TextDialog: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};
