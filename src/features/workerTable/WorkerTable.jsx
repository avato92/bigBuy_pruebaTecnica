/* eslint-disable no-restricted-globals */
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import PropTypes from 'prop-types';

import ButtonsElement from '../../components/ButtonsElement';
import {
  TABLE_COLUMNS_CONF, INITIAL_PAGE, MAXIMUM_SALARY, MINIMUM_SALARY,
} from './tableConfig';
import SearchIcon from '../../assets/searchIcon';

function WorkerTable(props) {
  const [salaryRange, setSalaryRange] = useState([MINIMUM_SALARY, MAXIMUM_SALARY]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [inputFilter, setInputFilter] = useState();
  const [rows, setRows] = useState([]);
  const { workers } = props;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(INITIAL_PAGE);
  };

  function parserData(worker) {
    const {
      name, age, id,
    } = worker;

    /**
     * Transforma los salarios base a salarios expresados en miles
     * Ej: 5400€ -> 5.4K
     */
    const salary = `${Math.round((worker.salary / 1000) * 10) / 10}K`;
    const actions = <ButtonsElement worker={worker} />;

    return {
      name, age, salary, id, actions,
    };
  }

  function createData(workersToParse) {
    if (inputFilter) {
      return workersToParse.filter((worker) => worker.name.toLowerCase().includes(inputFilter.toLowerCase()) || worker.email.toLowerCase().includes(inputFilter.toLowerCase()) || String(worker.age) === inputFilter).map((worker) => parserData(worker));
    }
    return workersToParse.map((worker) => parserData(worker));
  }

  function filterDataBySalary(workersToParse) {
    return createData(workersToParse.filter((worker) => worker.salary > salaryRange[0] && worker.salary < salaryRange[1]));
  }

  function filterInputAndSlider(workersToFilter) {
    const workersInputFiltered = createData(workersToFilter);
    return filterDataBySalary(workersInputFiltered);
  }

  useEffect(() => {
    setRows(createData(workers));
  }, [workers]);

  const handleClick = () => {
    const rowsCreated = filterDataBySalary(workers);
    setRows(rowsCreated);
  };

  const handleChangeInput = (event) => {
    setInputFilter(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setSalaryRange(newValue);
    if (inputFilter) {
      setRows(filterInputAndSlider(workers));
    }
    setRows(filterDataBySalary(workers));
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Box
          variant="standard"
          sx={{
            width: 300, display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
          }}
        >
          <Input
            sx={{ maxWidth: 150 }}
            placeholder="Search..."
            id="inputFilter"
            onChange={handleChangeInput}
            startAdornment={(
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
          )}
          />
          <Button onClick={handleClick} variant="contained">Filtrar</Button>
        </Box>
        <Slider
          sx={{ width: 300 }}
          getAriaLabel={() => 'Filtro de rango salarial'}
          value={salaryRange}
          onChange={handleChange}
          valueLabelDisplay="auto"
          max={5000}
          scale={(x) => `${x * 0.001}K`}
        />
      </Box>
      <TableContainer sx={{ maxHeight: '100%' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {TABLE_COLUMNS_CONF.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(
              (row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {TABLE_COLUMNS_CONF.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

WorkerTable.propTypes = {
  workers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    salary: PropTypes.number,
  })).isRequired,
};

export default WorkerTable;
