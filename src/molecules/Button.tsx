import React, { ReactNode } from 'react';
import { ButtonBaseProps, Button as MUIButton } from '@mui/material';



const Button = (props: any): JSX.Element => {
  return <MUIButton {...props} />;
};

export default Button;
