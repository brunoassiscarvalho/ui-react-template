import { FormControl, InputLabel } from '@mui/material';
import { Controller, Control, FieldValues } from 'react-hook-form';
import React, { ReactElement } from 'react';

export interface SelectOptions {
  id: string | number;
  label: string;
}
export interface SmartFormItemBase {
  name: string;
  label: string;
}

export interface SmartFormItemProps extends SmartFormItemBase {
  control: Control<FieldValues>;
  children: ReactElement;
  defaultValue: any;
}

export function SmartFormItem({ name, control, children, defaultValue, label, ...rest }: SmartFormItemProps) {
  return (
    <FormControl fullWidth>
      <InputLabel id={name}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => React.createElement(children.type, { ...field, ...rest })}
      />
    </FormControl>
  );
}
