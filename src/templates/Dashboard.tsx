import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Stack } from '@mui/material';
import { UsbRounded } from '@mui/icons-material';

interface DashboardProps {
  children: React.ReactNode;
  onChangeTab: (value: any) => void;
  menu: Array<{ label: string; value: string }>;
  startMenu?: string;
}

export default function Dashboard({ children, onChangeTab, menu, startMenu }: DashboardProps) {
  const [value, setValue] = useState<string>(startMenu || menu[0].value);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    console.log('vlue', value);
    onChangeTab && onChangeTab(value);
  }, [value]);

  useEffect(() => {
    startMenu && setValue(startMenu);
  }, [startMenu]);

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Stack direction="row" spacing={2}>
          <Box position="sticky">
            <Box display="flex" justifyContent="center" padding={3}>
              <UsbRounded />
            </Box>
            <TabList onChange={handleChange} aria-label="lab API tabs example" orientation="vertical" variant="scrollable" sx={{ borderRight: 1, borderColor: 'divider', height: '100vh' }}>
              {menu.map((menuProps) => (
                <Tab {...menuProps} key={menuProps.value} />
              ))}
            </TabList>
          </Box>
          <Box width="100%" height="100vh" padding={2} paddingLeft={15}>
            {children}
          </Box>
        </Stack>
      </TabContext>
    </Box>
  );
}
