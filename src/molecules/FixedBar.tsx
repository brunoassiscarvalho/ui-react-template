import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

interface FixedBottomBarProps {
  children: React.ReactNode;
}

export default function FixedBar({ children }: FixedBottomBarProps) {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 5,
        minWidth: 700,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10000,
      }}
    >
      <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        {children}
      </Paper>
    </Box>
  );
}
