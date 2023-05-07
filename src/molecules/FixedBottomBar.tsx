import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Breadcrumbs, Button, Grid, Link, Stack, Typography } from '@mui/material';
import { Add, ArrowBack } from '@mui/icons-material';

interface FixedBottomBarProps {
  children: React.ReactNode;
}

export default function FixedBottomBar({ children }: FixedBottomBarProps) {
  return (
    <Box sx={{ position: 'fixed', top: 5, minWidth: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex:10000 }}>
      <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <Stack direction="row" spacing={3} alignItems="center">
          <IconButton color="primary" aria-label="upload picture" component="label">
            <ArrowBack />
          </IconButton>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              MUI
            </Link>
            <Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
              Core
            </Link>
            <Typography color="text.primary">Trek</Typography>
          </Breadcrumbs>
        </Stack>

        <Stack direction="row" spacing={3} alignItems="center">
          <Box>
            <IconButton type="button" aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase placeholder="Procurar Trek" inputProps={{ 'aria-label': 'search google maps' }} />
          </Box>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Button variant="text" startIcon={<Add />}>
            Novo
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
