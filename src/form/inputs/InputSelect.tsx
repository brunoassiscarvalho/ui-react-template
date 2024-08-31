import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { SelectOptions, SmartFormItemBase } from '../SmartFormItem';

interface InputSelectProps extends SmartFormItemBase {
  options: Array<SelectOptions| string> ;
}

export default function InputSelect(props: InputSelectProps) {
  return (
    <Select {...props}>
     {props.options?.map((item: SelectOptions | string) => {
  if (typeof item === "string") {
    return <MenuItem key={item} value={item}>{item}</MenuItem>;
  } else {
    return <MenuItem key={item.id} value={item.id}>{item.label}</MenuItem>;
  }
})}
    </Select>
  );
}
