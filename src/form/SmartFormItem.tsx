import { FormControl, InputLabel } from '@mui/material';
import { Controller, Control, FieldValues } from 'react-hook-form';
import React, { ReactElement } from 'react';

interface SmartFormItemProps {
  name: string;
  control: Control<FieldValues>;
  children: ReactElement;
  defaultValue: any;
}

export function SmartFormItem({ name, control, children, defaultValue }: SmartFormItemProps) {
  return (
    <FormControl fullWidth>
      <InputLabel id={name}>Metodo</InputLabel>
      <Controller name={name} control={control} defaultValue={defaultValue} render={({ field }) => React.createElement(children.type, { ...field })} />
    </FormControl>
  );
}
