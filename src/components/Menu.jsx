import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const Menu = ({ setCurrentCat }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCurrentCat(event.target.innerText.toLowerCase());
  };

  return (
    <Box sx={{ maxWidth: { xs: 380, sm: 580 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={"auto"}
        aria-label="scrollable tabs"
        allowScrollButtonsMobile={true}
      >
        <Tab label="Appetizers" />
        <Tab label="Entrees" />
        <Tab label="Sides" />
        <Tab label="Desserts" />
      </Tabs>
    </Box>
  )
}

export default Menu;
