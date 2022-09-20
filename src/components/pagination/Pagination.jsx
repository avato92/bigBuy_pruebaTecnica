import Pagination from '@mui/material/Pagination';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

import {
  INITIAL_PAGE, SELECT_CONFIG, SX_BOX, SX_SLIDER,
} from './config';

function PaginationComponent(props) {
  const {
    rowsPerPage, setPage, setRowsPerPage, page, count,
  } = props;

  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(INITIAL_PAGE);
  };
  return (

    <Box sx={SX_BOX}>
      <Select
        sx={SX_SLIDER}
        size="small"
        labelId="number of employees"
        id="numberOfEmployees"
        value={rowsPerPage}
        onChange={handleChangeRowsPerPage}
        label="number of results"
      >

        {SELECT_CONFIG.map((item) => (

          <MenuItem key={item.id} value={item.value}>
            {item.label}
          </MenuItem>
        ))}

      </Select>
      <Pagination size="small" color="primary" page={page + 1} count={count} shape="rounded" onChange={handleChangePage} />
    </Box>
  );
}

PaginationComponent.propTypes = {
  rowsPerPage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  setRowsPerPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default PaginationComponent;
