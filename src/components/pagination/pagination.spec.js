import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';

const rowsPerPage = 5;
const setPage = () => {};
const setRowsPerPage = () => {};
const page = 0;
const count = 50;

describe('pagination testing', () => {
  it('should it has 9 child', () => {
    render(<Pagination
      rowsPerPage={rowsPerPage}
      setPage={setPage}
      setRowsPerPage={setRowsPerPage}
      page={page}
      count={count}
    />);

    const input = screen.getAllByRole('button');

    expect(input.length).toEqual(9);
  });
});
