import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Checkbox, FormControlLabel, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const LeftSidebar = () => {
    return (
        <div>
            {/* Accordion for Filter Categories */}
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    Top Categories
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                        <FormControlLabel control={<Checkbox />} label="Clothing, Shoes & Accessories" />
                        <FormControlLabel control={<Checkbox />} label="Home & Garden" />
                        <FormControlLabel control={<Checkbox />} label="Clothing, Shoes & Accessories" />
                        <FormControlLabel control={<Checkbox />} label="Home & Garden" />
                        {/* Add other categories */}
                    </Box>
                </AccordionDetails>
            </Accordion>

            {/* Add more Accordion or filtering sections */}
        </div>
    )
}

export default LeftSidebar