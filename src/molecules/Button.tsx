import React from 'react';
import { Button as MUIButton } from '@mui/material';

interface IButton {
  onClick?: () => void;
  label: string;
}

const Button = ({ label, onClick }: IButton): JSX.Element => {
  return <MUIButton onClick={onClick}>{label}</MUIButton>;
};

export default Button;
