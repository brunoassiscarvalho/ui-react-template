import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

interface ContinuousSliderProps {
  onChange?: (value: number) => void;
}

const marks = [
  {
    value: 50,
    
  },
  {
    value: 75,
    
  },
  {
    value: 100,
   
  },
  {
    value: 150,
  },
  {
    value: 200,
  },
];

export default function ContinuousSlider({ onChange }: ContinuousSliderProps) {
  const [value, setValue] = React.useState<number>(100);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
    if (onChange) onChange(newValue as number);
  };

  return (
    <Box sx={{ width: 200 , display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Slider
        aria-label="Volume"
        value={value}
        onChange={handleChange}
        size="small"
        step={5}
        marks={marks}
        min={50}
        max={200}
      />
    </Box>
  );
}
