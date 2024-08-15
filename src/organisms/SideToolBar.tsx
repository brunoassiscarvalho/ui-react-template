import { Paper, Stack } from '@mui/material';
import { ReactNode } from 'react';

interface PropsSideToolBar {
  children: ReactNode;
  side?: 'left' | 'right';
}

export default function SideToolBar({ children, side = 'right' }: PropsSideToolBar) {
  const baseProperties = {
    padding: '15px 10px',
    fontSize: '12px',
    position: 'fixed',
    top: 0,
    minWidth: 260,
    height: '100vh',
    zIndex: 97,
    paddingTop: 10,
    borderLeft: 1,
    borderColor: 'divider',
  };

  const leftProps = {
    ...baseProperties,
    left: 50,
  };
  const rightProps = {
    ...baseProperties,
    right: 0,
  };
  return (
    <Paper sx={side === 'left' ? leftProps : rightProps}>
      <Stack spacing={2}>{children}</Stack>
    </Paper>
  );
}
