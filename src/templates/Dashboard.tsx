import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Stack } from '@mui/material';

interface DashboardProps {
  children: React.ReactNode;
  onChangeTab: (value: any) => void;
  menu: Array<{ label: string; value: string }>;
  startMenu?: string;
}

export default function Dashboard({ children, onChangeTab, menu, startMenu }: DashboardProps) {
  const [value, setValue] = useState(startMenu || menu[0].value);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    onChangeTab && onChangeTab(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Stack direction="row" spacing={2}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" orientation="vertical" variant="scrollable" sx={{ borderRight: 1, borderColor: 'divider', height: '100vh' }}>
            {menu.map((menuProps) => (
              <Tab {...menuProps} />
            ))}
          </TabList>
          <Box width="100%" height="100vh" padding={2}>
            {children}
          </Box>
        </Stack>
      </TabContext>
    </Box>
  );
}
