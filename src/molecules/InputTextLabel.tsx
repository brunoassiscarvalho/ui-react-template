import { TextField } from '@mui/material';
import React from 'react';
interface InputTextLabelProps {
  label: string;
}

export default function InputTextLabel({ label }: InputTextLabelProps) {
  return <TextField label={label} variant="outlined" />;
}
