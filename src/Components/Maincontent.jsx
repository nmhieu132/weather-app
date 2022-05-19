import {Box} from '@mui/material'
import PropTypes from 'prop-types';
import {useState} from 'react'
import { Tab,Tabs } from '@mui/material';
import {Typography} from '@mui/material'
import Today from './Today'
import Week from './Week'
import Hour from './Hour'
function TabPanel(props) {
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
            <Typography component={'span'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  } 
function Maincontent(){
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };
    return(
        <>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Today" {...a11yProps(0)}/>
                <Tab label="Week" {...a11yProps(1)}/>
                <Tab label="Hour" {...a11yProps(2)}/>
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <Today/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Week/>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Hour/>
        </TabPanel>
        
        </>
    );
}
export default Maincontent