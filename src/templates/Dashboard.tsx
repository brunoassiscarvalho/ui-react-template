import React, { ReactNode, ReactElement, memo } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Stack } from '@mui/material';
import { UsbRounded } from '@mui/icons-material';

interface DashboardProps {
  children: ReactNode;
  onChangeTab: (value: any) => void;
  menu: Array<{ label?: string; value: string; icon: ReactElement }>;
  startMenu?: string;
}

const Dashboard = ({ children, onChangeTab, menu, startMenu }: DashboardProps) => {
  
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    onChangeTab && onChangeTab(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={startMenu || menu[0].value}>
        <Stack direction="row" spacing={2}>
          <Box position="fixed">
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
};

export default memo(Dashboard, tabPropsAreEqual);

function tabPropsAreEqual(prevTab: DashboardProps, nextTab: DashboardProps) {
  return prevTab.startMenu === nextTab.startMenu;
}
