import Button from '@mui/material/Button';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';

import PropTypes from 'prop-types';

import SearchIcon from '../../assets/SearchIcon';
import AddUserIcon from '../../assets/AddUserIcon';
import DetailsModal from '../detailsModal/DetailsModal';
import {
  MAX_SLIDER,
  SX_BOX,
  SX_BOX_INSIDE,
  SX_BUTTON,
  SX_INPUT,
  SX_SPAN,
  SX_BUTTON_ADD,
  SX_P,
  SX_ICON,
  CONFIG_FORM,
} from './config';
import { SX_SLIDER } from '../pagination/config';

function FilterElements(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    handleChange, handleChangeInput, handleClick, salaryRange,
  } = props;

  return (
    <>
      <Box sx={SX_BOX}>
        <Box
          variant="standard"
          sx={SX_BOX_INSIDE}
        >
          <Input
            sx={SX_INPUT}
            placeholder="Search..."
            id="inputFilter"
            onChange={handleChangeInput}
            startAdornment={(
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
          )}
          />
          <Button sx={SX_BUTTON} onClick={handleClick} variant="contained">
            F
            <span style={SX_SPAN}>iltrar</span>
          </Button>
        </Box>
        <Slider
          sx={SX_SLIDER}
          getAriaLabel={() => 'Filtro de rango salarial'}
          value={salaryRange}
          onChange={handleChange}
          valueLabelDisplay="auto"
          max={MAX_SLIDER}
          scale={(x) => `${x * 0.001}K`}
        />
      </Box>

      <Button
        variant="contained"
        onClick={handleOpen}
        sx={SX_BUTTON_ADD}
      >
        <AddUserIcon sx={SX_ICON} />
        <p style={SX_P}>
          N
          <span style={SX_SPAN}>uevo empleado</span>
        </p>
      </Button>
      <DetailsModal
        config={CONFIG_FORM}
        open={open}
        handleClose={handleClose}
        type="create"
      />
    </>
  );
}

FilterElements.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  salaryRange: PropTypes.arrayOf(Number).isRequired,
};

export default FilterElements;
