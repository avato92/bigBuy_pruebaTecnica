import { useState } from 'react';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CroosIcon from '../../assets/CrossIcon';
import EyeIcon from '../../assets/EyeIcon';
import { deleteWorker } from '../../features/workerComponent/workerSlice';
import DetailsModal from '../detailsModal/DetailsModal';
import CONFIG_FORM from './config';

function ButtonsElement(props) {
  const { worker } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const {
    id,
  } = worker;

  return (
    <ButtonGroup size="small" aria-label="small actions buttons">
      <Button key="details" onClick={handleOpen}>
        <EyeIcon />
      </Button>
      <Button key="delete" onClick={() => dispatch(deleteWorker(id))}>
        <CroosIcon />
      </Button>
      <DetailsModal config={CONFIG_FORM} open={open} worker={worker} handleClose={handleClose} type="update" />
    </ButtonGroup>
  );
}

ButtonsElement.propTypes = {
  worker: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    salary: PropTypes.number,
  }).isRequired,
};

export default ButtonsElement;
