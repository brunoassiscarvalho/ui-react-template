import React from 'react';
import { Box } from '@mui/material';

interface LandscapeBoardProps {
  children: React.ReactNode;
}

export default function LandscapeBoard(params: LandscapeBoardProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box>Login</Box>
    </Box>
  );
}
