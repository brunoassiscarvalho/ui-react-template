import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Card, { CardProps } from '../molecules/Card';

interface CardGridProps {  
  dataSource: Array<CardProps>;
}

export default function CardGrid({ dataSource }: CardGridProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {dataSource.map((cardProps: CardProps, index: number) => (
          <Grid xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
            <Card {...cardProps} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
