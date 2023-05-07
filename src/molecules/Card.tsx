import * as React from 'react';
import { Card as MUICard } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export interface CardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

export default function Card({ title, description, onClick }: CardProps) {
  return (
    <MUICard sx={{ maxWidth: 345 }}>
      <CardActionArea
        onClick={() => {
          onClick && onClick();
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MUICard>
  );
}
