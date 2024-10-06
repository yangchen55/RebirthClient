import React from 'react'
import { Box, Typography, Button, Grid } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import CSS for carousel


const MainPage = () => {
    return (

        <div>
            {/* Carousel Section */}
            <Carousel>
                <img src="banner1.jpg" alt="Banner 1" />
                <img src="banner2.jpg" alt="Banner 2" />
                {/* Add more carousel items */}
            </Carousel>

            {/* Promotional Banner */}
            <Box sx={{ padding: 2, backgroundColor: '#f9f9f9' }}>
                <Typography variant="h6">Not a FIRST member?</Typography>
                <Button variant="contained">Join Now</Button>
            </Box>

            {/* Shop by Category Section */}
            <Typography variant="h5" sx={{ marginTop: 2 }}>Shop by Category</Typography>
            <Grid container spacing={2}>
                {/* Replace these with real category data */}
                <Grid item xs={4}>
                    <img src="category1.jpg" alt="Category 1" />
                    <Typography>Category 1</Typography>
                </Grid>
                <Grid item xs={4}>
                    <img src="category2.jpg" alt="Category 2" />
                    <Typography>Category 2</Typography>
                </Grid>
                {/* Add more categories */}
            </Grid>
        </div>

    )
}

export default MainPage

