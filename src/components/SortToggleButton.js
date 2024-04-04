import React from 'react';
import { ToggleButton } from '@mui/material';

const SortToggleButton = ({ onClick }) => {
  return (
    <ToggleButton onClick={onClick}>Toggle Sort Order</ToggleButton>
  );
};

export default SortToggleButton;