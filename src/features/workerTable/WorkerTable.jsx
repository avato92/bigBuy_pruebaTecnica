/* eslint-disable no-unused-vars */
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
import ButtonGroup from '@mui/material/ButtonGroup';
import PropTypes from 'prop-types';

const TABLE_COLUMNS_CONF = [
  {
    id: 'name', label: 'Nombre', minWidth: 55, align: 'right',
  },
  {
    id: 'age', label: 'Edad', minWidth: 50, align: 'right',
  },
  {
    id: 'salary', label: 'Salario', minWidth: 50, align: 'right',
  },
  {
    id: 'actions', label: 'Acciones', minWidth: 55, align: 'right',
  },
];

function WorkerTable(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { workers } = props;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const buttonsElement = () => (
    <ButtonGroup size="small" aria-label="small actions buttons">
      <Button key="details">
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.3" d="M19.644 6.08429C18.7485 4.25885 17.3591 2.72109 15.6335 1.6456C13.908 0.570114 11.9155 0 9.88219 0C7.84893 0 5.8564 0.570114 4.13086 1.6456C2.40532 2.72109 1.0159 4.25885 0.120387 6.08429C0.0412594 6.23913 0 6.41053 0 6.58442C0 6.7583 0.0412594 6.92971 0.120387 7.08455C1.0159 8.90998 2.40532 10.4477 4.13086 11.5232C5.8564 12.5987 7.84893 13.1688 9.88219 13.1688C11.9155 13.1688 13.908 12.5987 15.6335 11.5232C17.3591 10.4477 18.7485 8.90998 19.644 7.08455C19.7203 6.92887 19.76 6.7578 19.76 6.58442C19.76 6.41104 19.7203 6.23996 19.644 6.08429ZM9.88836 11.524C8.9114 11.524 7.9564 11.2343 7.14409 10.6915C6.33178 10.1488 5.69867 9.37729 5.32481 8.4747C4.95094 7.57212 4.85311 6.57894 5.04371 5.62076C5.2343 4.66258 5.70476 3.78244 6.39557 3.09163C7.08638 2.40082 7.96653 1.93036 8.92471 1.73977C9.88289 1.54917 10.8761 1.64699 11.7787 2.02086C12.6812 2.39472 13.4527 3.02784 13.9955 3.84014C14.5382 4.65245 14.8279 5.60746 14.8279 6.58442C14.8295 7.23465 14.7028 7.87881 14.4549 8.47993C14.207 9.08106 13.8429 9.62732 13.3834 10.0874C12.9239 10.5475 12.378 10.9123 11.7772 11.1609C11.1764 11.4096 10.5324 11.5371 9.88219 11.5363L9.88836 11.524Z" fill="#0090FF" />
          <path d="M13.0618 7.44891C12.9499 7.86568 12.757 8.25633 12.4941 8.59856C12.2312 8.94078 11.9035 9.22788 11.5297 9.44346C11.1559 9.65904 10.7433 9.79888 10.3154 9.85499C9.88753 9.91111 9.45281 9.8824 9.03604 9.7705C8.61927 9.65861 8.22861 9.46572 7.88638 9.20285C7.54415 8.93998 7.25706 8.61227 7.04148 8.23845C6.8259 7.86462 6.68606 7.45199 6.62995 7.02413C6.57384 6.59626 6.60255 6.16153 6.71444 5.74476C7.03113 5.97379 7.4191 6.08239 7.80867 6.05104C8.19824 6.01969 8.56387 5.85045 8.83985 5.57372C9.11583 5.29699 9.28409 4.93092 9.31439 4.54127C9.34469 4.15162 9.23504 3.76393 9.00516 3.44786C9.83946 3.21152 10.7334 3.31533 11.4914 3.73654C12.2493 4.15775 12.8096 4.86207 13.0494 5.69536C13.2099 6.27515 13.2099 6.88764 13.0494 7.46743L13.0618 7.44891Z" fill="#0090FF" />
        </svg>
      </Button>
      <Button key="delete">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.38036 12.2769C1.13243 12.5232 0.993164 12.8572 0.993164 13.2055C0.993164 13.5538 1.13243 13.8878 1.38036 14.1341L2.31545 15.0627C2.5635 15.3089 2.89985 15.4472 3.25055 15.4472C3.60125 15.4472 3.9376 15.3089 4.18565 15.0627L8.39316 10.8844L5.58787 8.09861L1.38036 12.2769ZM15.406 2.06311L14.4709 1.1345C14.2228 0.888303 13.8865 0.75 13.5358 0.75C13.1851 0.75 12.8487 0.888303 12.6007 1.1345L8.39316 5.3128L11.1985 8.09861L15.406 3.92031C15.6539 3.67399 15.7932 3.33998 15.7932 2.99171C15.7932 2.64344 15.6539 2.30943 15.406 2.06311Z" fill="#CF0E08" />
          <path d="M15.406 12.2769C15.6539 12.5232 15.7932 12.8572 15.7932 13.2055C15.7932 13.5538 15.6539 13.8878 15.406 14.1341L14.4709 15.0627C14.2228 15.3089 13.8865 15.4472 13.5358 15.4472C13.1851 15.4472 12.8487 15.3089 12.6007 15.0627L1.38036 3.92031C1.13243 3.67399 0.993164 3.33998 0.993164 2.99171C0.993164 2.64344 1.13243 2.30943 1.38036 2.06311L2.31545 1.1345C2.5635 0.888303 2.89985 0.75 3.25055 0.75C3.60125 0.75 3.9376 0.888303 4.18565 1.1345L15.406 12.2769Z" fill="#CF0E08" />
        </svg>
      </Button>

    </ButtonGroup>
  );

  function createData(workersToParse) {
    return workersToParse.map((worker) => {
      const {
        name, age, salary, id,
      } = worker;
      const actions = buttonsElement();

      return {
        name, age, salary, id, actions,
      };
    });
  }

  const rows = createData(workers);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
