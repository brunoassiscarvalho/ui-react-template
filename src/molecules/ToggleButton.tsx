import * as React from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Icon } from '@mui/material';

interface ToggleButtonsProps {
  buttons: Array<ToggleItem>;
  onToggle?: (value:string)=>void;
}

export interface ToggleItem {
  value: string;
  icon?: any;
  label?:string
}

export default function ToggleButtons({ buttons, onToggle }: ToggleButtonsProps) {
  const [value, setValue] = React.useState<string | null>('left');

  const handleToggle = (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
    setValue(newValue);
    if(onToggle && newValue) onToggle(newValue);
  };

  return (
    <ToggleButtonGroup value={value} exclusive onChange={handleToggle} aria-label="text alignment">
      {buttons.map(({ value, icon, label }) => (
        <ToggleButton value={value} aria-label="left aligned">
          {icon ? <Icon component={icon} />: <>{label}</>}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
