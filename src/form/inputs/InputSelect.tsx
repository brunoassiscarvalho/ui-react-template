import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { SelectOptions, SmartFormItemBase } from '../SmartFormItem';

interface InputSelectProps extends SmartFormItemBase {
  options: Array<SelectOptions>;
}

export default function InputSelect(props: InputSelectProps) {
  return (
    <Select {...props}>
      {props.options?.map(({ id, label }: SelectOptions) => (
        <MenuItem value={id}>{label}</MenuItem>
      ))}
    </Select>
  );
}
