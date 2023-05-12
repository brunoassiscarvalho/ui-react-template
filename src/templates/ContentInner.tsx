import React from 'react';
import { FixedBar } from '@mern-monorepo/ui-react-template';
import { Box, Stack, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

interface ContentInnerProps {
  children: React.ReactNode;

  goBack: () => void;
  title: string;
}
export default function ContentInner({ title, children, goBack }: ContentInnerProps) {
  return (
    <Box paddingTop={5} paddingBottom={50}>
      <FixedBar>
        <Stack direction="row" spacing={3} alignItems="center">
          <IconButton color="primary" aria-label="upload picture" component="label" onClick={goBack}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h6">{title}</Typography>
        </Stack>
      </FixedBar>
      {children}
    </Box>
  );
}
