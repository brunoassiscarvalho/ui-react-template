import React from 'react';
import { Box, Paper } from '@mui/material';

interface LandscapeBoardProps {
  children: React.ReactNode;
}

export default function LandscapeBoard({children}: LandscapeBoardProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      {children}
    </Box>
  );
}
