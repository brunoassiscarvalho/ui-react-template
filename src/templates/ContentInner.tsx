import React from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { AddToQueue, ArrowBack } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

interface ContentInnerProps {
  children: React.ReactNode;
  title: string;
  isGoback?: boolean;
  goBack?: () => void;
}
export default function ContentInner({ title, children, goBack, isGoback = true }: ContentInnerProps) {
  return (
    <Stack width="100%" spacing={3}>
      <Stack
        spacing={3}
        direction="row"
        alignItems="center"
        height="4vh"
        borderBottom={2}
        padding={2}
        borderColor="green"
        paddingBottom={4}
      >
        <Stack direction="row" spacing={3} alignItems="center">
          <Box sx={{ marginLeft:10, width: 35, height: 35  }}>
            {isGoback && (
              <IconButton aria-label="delete" size="small" onClick={goBack}>
                <ArrowBack />
              </IconButton>
            )}
          </Box>
          <AddToQueue fontSize="large" />
          <Typography variant="h5">{title}</Typography>
        </Stack>
      </Stack>
      <Box padding={2}> {children}</Box>
    </Stack>
  );
}
