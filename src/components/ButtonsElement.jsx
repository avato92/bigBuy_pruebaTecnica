import { useState } from 'react';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CroosIcon from '../assets/CrossIcon';
import EyeIcon from '../assets/EyeIcon';
import { deleteWorker } from '../features/workerComponent/workerSlice';

function ButtonsElement(props) {
  const { worker } = props;
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const {
    id, name, email, salary,
  } = worker;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ButtonGroup size="small" aria-label="small actions buttons">
      <Button key="details" onClick={handleOpen}>
        <EyeIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <p>
          {name}
          {salary}
          {email}
        </p>
      </Modal>
      <Button key="delete" onClick={() => dispatch(deleteWorker(id))}>
        <CroosIcon />
      </Button>

    </ButtonGroup>
  );
}

ButtonsElement.propTypes = {
  worker: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    salary: PropTypes.number,
  }).isRequired,
};

export default ButtonsElement;
