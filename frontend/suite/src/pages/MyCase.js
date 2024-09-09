import React, { useState } from "react";
import Sidenav from "../Components/Sidenav";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import '../style/stylesheet.css';
import Addcase from "../Components/Addcase";
import Caselist from "../Components/Caselist"
const MyCase = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // CustomTabPanel component to handle tab content
  const TabPanel = (props: { children?: React.ReactNode; index: number; value: number; }) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  };

  return (
    <div className="testone">
      <Sidenav />
<div className="tesst">
      {/* Tabs */}
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="ADD Case" id="tab-0" aria-controls="tabpanel-0" />
            <Tab label="Case List" id="tab-1" aria-controls="tabpanel-1" />
          </Tabs>
        </Box>

        {/* Tab Panels */}
        <TabPanel value={value} index={0}>
          <Addcase/>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Caselist/>
        </TabPanel>
      </Box>

      </div>
    </div>
  );
};

export default MyCase;
