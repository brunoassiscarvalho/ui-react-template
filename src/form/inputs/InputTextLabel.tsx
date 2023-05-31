import { TextField } from '@mui/material';
import React from 'react';
interface InputTextLabelProps {
  label: string;
  name: string;
}

export default function InputTextLabel({ label, name }: InputTextLabelProps) {
  return <TextField label={label} variant="outlined" />;
}
