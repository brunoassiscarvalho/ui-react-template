import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function InputSelect(props: any) {
  return (
    <Select {...props}>
      <MenuItem value="get">GET</MenuItem>
      <MenuItem value="post">POST</MenuItem>
      <MenuItem value="put">PUT</MenuItem>
      <MenuItem value="patch">PATCH</MenuItem>
      <MenuItem value="delete">DELETE</MenuItem>
    </Select>
  );
}
