import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

import { closeModal } from 'redux/modules/modal/actions';

const Transition = React.forwardRef(function Transition(props, ref) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalDelete = ({ submitModal, titleDialog, textDialog, loading }) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(state => state.modal);

  return (
    <div>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => dispatch(closeModal())}
      >
        {loading ? (
          <DialogContent>
            <CircularProgress color="primary" />
          </DialogContent>
        ) : (
          <>
            <DialogTitle>{titleDialog}</DialogTitle>
            <DialogContent>
              <DialogContentText>{textDialog}</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => dispatch(closeModal())}
                variant="contained"
                color="default"
              >
                Não
              </Button>
              <Button
                onClick={submitModal}
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
};

ModalDelete.propTypes = {
  submitModal: PropTypes.func.isRequired,
  titleDialog: PropTypes.string.isRequired,
  textDialog: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ModalDelete;
