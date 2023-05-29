import React from 'react';
import { Button as MUIButton } from '@mui/material';

interface IButton {
  onClick?: () => void;
  label: string;
  type?: 'submit' | 'button' 
}

const Button = ({ label, onClick, type }: IButton): JSX.Element => {
  return <MUIButton type={type} onClick={onClick}>{label}</MUIButton>;
};

export default Button;
