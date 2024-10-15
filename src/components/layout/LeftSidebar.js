import React, { useState, useEffect } from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Checkbox, FormControlLabel, Box, Grid2, Divider, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ControlledCheckbox from '../../reusable/ControlledCheckbox';


const LeftSidebar = () => {
    const checkboxLabels = [
        "Kogan-first-normal Member Benefits",
        "Kogan Sold by Kogan.com",

    ];

    const DeliveryOptions =
        [
            "Fast Dispatch",
            "Free Shipping"
        ]

    const categories = [
        "Books, Magazines",
        "Textbooks, Education & Reference",
        "Non-Fiction Books",
        "Clothing, Shoes & Accessories",
        "Men's Shoes & Fashion",
        "Women's Shoes & Fashion",
        "Baby",
        "Cameras",
        "Collectables"
    ];

    const brands = [
        "All Kogan Exclusive",
        "Kogan",
        "Apple",
        "vidaXL",
        "Samsung"
    ];
    const [checkboxState, setCheckboxState] = useState(Array(checkboxLabels.length).fill(false));
    const [deliveryOptionState, setDeliveryOptionState] = useState(Array(DeliveryOptions.length).fill(false))


    // Handle checkbox change for any checkbox
    const handleOnCheckboxChange = (index) => (event) => {
        const newState = [...checkboxState]; // Create a copy of the current state
        const newDeliveryOptions = [...deliveryOptionState]
        newState[index] = event.target.checked; // Update the state of the specific checkbox by index
        newDeliveryOptions[index] = event.target.checked;
        setCheckboxState(newState); // Set the updated state
        setDeliveryOptionState(newDeliveryOptions)
    };



    useEffect(() => {
        // Log the updated checked state after every render
        console.log('Checked state updated:', checkboxState);
    }, [checkboxState]); // This will log the state whenever it updates




    return (
        <Grid2>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {checkboxLabels.map((label, index) => (
                    <ControlledCheckbox
                        key={index}
                        label={label} // Use the label from the array
                        checked={checkboxState[index]} // Controlled state for each checkbox
                        onChange={handleOnCheckboxChange(index)} // Pass the handler with the correct index
                    />
                ))}
                <Divider aria-hidden="true" sx={{ my: 2 }} />
                <Typography variant='h6' sx={{ fontWeight: "bold", textAlign: "left" }}>Delivery Options</Typography>
                {DeliveryOptions.map((label, index) => (
                    <ControlledCheckbox key={index}
                        label={label}
                        checked={deliveryOptionState[index]}
                        onChange={handleOnCheckboxChange(index)} />
                ))}
                <Divider aria-hidden="true" sx={{ my: 2 }} />

                {/* Accordion for Filter Categories */}
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant='h6' sx={{ fontWeight: "bold", textAlign: "left" }}>Top Categories</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            {
                                categories.map((label, index) => (
                                    <ControlledCheckbox
                                        key={index}
                                        label={label}
                                        checked={checkboxState[index]}
                                        onChange={handleOnCheckboxChange(index)} />
                                ))
                            }

                        </Box>
                    </AccordionDetails>
                </Accordion>

                <Divider aria-hidden="true" sx={{ my: 2 }} />
                {/* Accordion for Filter Categories */}
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant='h6' sx={{ fontWeight: "bold", textAlign: "left" }}>Top Brands</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            {
                                brands.map((label, index) => (
                                    <ControlledCheckbox
                                        key={index}
                                        label={label}
                                        checked={checkboxState[index]}
                                        onChange={handleOnCheckboxChange(index)} />
                                ))
                            }

                        </Box>
                    </AccordionDetails>
                </Accordion>


            </Box>





            {/* Add more Accordion or filtering sections */}
        </Grid2>
    )
}

export default LeftSidebar