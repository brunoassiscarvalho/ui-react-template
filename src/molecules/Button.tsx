import React, { ReactNode } from 'react';
import { Button as MUIButton } from '@mui/material';

interface IButton {
  onClick?: () => void;
  label?: string;
  type?: 'submit' | 'button';
  children?: ReactNode;
}

const Button = ({ label, onClick, type, children }: IButton): JSX.Element => {
  return (
    <MUIButton type={type} onClick={onClick}>
      {label || children}
    </MUIButton>
  );
};

export default Button;
