import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';
import { SelectOptions, SmartFormItemBase } from '../SmartFormItem';

interface InputAutocompleteProps extends SmartFormItemBase {
  options: Array<SelectOptions>;
}

export default function InputAutocomplete(props: InputAutocompleteProps) {
  return <Autocomplete getOptionLabel={(option) => option.label} disablePortal {...props} renderInput={(params) => <TextField {...params} label={props.label} />} />;
}
