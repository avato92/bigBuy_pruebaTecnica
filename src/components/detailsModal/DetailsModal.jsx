/* eslint-disable no-unused-vars */
import { useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

import { updateWorker, createWorker } from '../../features/workerComponent/workerSlice';
import { styleBoxContainer, styleBoxInput } from './constants';

function DetailsModal(props) {
  const [error, setError] = useState(false);
  const {
    worker, open, handleClose, type,
  } = props;

  const dispatchRedux = useDispatch();
  const {
    id, name, email, salary, age,
  } = worker;

  const initialState = {
    id: id || null,
    name: name || '',
    email: email || '',
    age: age || 0,
    salary: salary || 0,
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'name':
      case 'email':
      case 'age':
      case 'salary':
        return { ...state, [action.type]: action.payload };
      default:
        return initialState;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const validationForm = () => state.name && state.age && state.salary && state.email;

  const handleInput = (ev, typeInput) => {
    dispatch({ type: typeInput, payload: ev.target.value });
  };

  const handleClick = () => {
    if (type === 'update' && validationForm()) {
      dispatchRedux(updateWorker(state));
      setError(false);
      handleClose();
    } else if (type === 'create' && validationForm()) {
      dispatchRedux(createWorker({ ...state, id: Math.random() }));
      setError(false);
      handleClose();
    } else {
      setError(true);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="Modad de detalles"
      aria-describedby="Modal donde se puede apreciar los detalles del trabajador"
    >
      <Box sx={styleBoxContainer}>
        {error && <p>Hay errores en el formulario, revisalo</p>}
        <Box sx={styleBoxInput}>
          <InputLabel htmlFor="inputName">
            Nombre
          </InputLabel>
          <Input
            sx={{ maxWidth: 300 }}
            id="inputName"
            onChange={(ev) => handleInput(ev, 'name')}
            value={state.name}
          />
        </Box>
        <Box sx={styleBoxInput}>
          <InputLabel htmlFor="inputEmail">
            Email
          </InputLabel>
          <Input
            sx={{ maxWidth: 300 }}
            id="inputEmail"
            onChange={(ev) => handleInput(ev, 'email')}
            value={state.email}
          />
        </Box>
        <Box sx={styleBoxInput}>
          <InputLabel htmlFor="inputAge">
            Edad
          </InputLabel>
          <Input
            sx={{ maxWidth: 300 }}
            id="inputAge"
            onChange={(ev) => handleInput(ev, 'age')}
            value={state.age}
            type="number"
          />
        </Box>
        <Box sx={styleBoxInput}>
          <InputLabel htmlFor="inputSalary">
            Salario
          </InputLabel>
          <Input
            sx={{ maxWidth: 300 }}
            id="inputSalary"
            onChange={(ev) => handleInput(ev, 'salary')}
            value={state.salary}
            type="number"
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button sx={{ maxWidth: 100 }} variant="contained" onClick={handleClick}>Guardar</Button>
        </Box>
      </Box>
    </Modal>
  );
}

DetailsModal.propTypes = {
  worker: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    salary: PropTypes.number,
  }),
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

DetailsModal.defaultProps = {
  worker: {
    id: null,
    email: '',
    name: '',
    salary: 0,
    age: 0,
  },
};

export default DetailsModal;
