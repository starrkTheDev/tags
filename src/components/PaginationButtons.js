import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationButtons = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <Stack spacing={2}>
      <Pagination count={totalPages} page={currentPage} onChange={onPageChange} />
    </Stack>
  );
};

export default PaginationButtons;