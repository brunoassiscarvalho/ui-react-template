import React from 'react';
import { Button as MUIButton } from '@mui/material';

interface IButton {
  onClick?: () => void;
}

const Button = (props: IButton): JSX.Element => {
  return <MUIButton>AAAAAA</MUIButton>;
};

export default Button;
