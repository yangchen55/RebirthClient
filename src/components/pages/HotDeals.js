import React from 'react'
import { Grid, Box, Grid2 } from '@mui/material';
import LeftSidebar from '../layout/LeftSidebar';
import RightSidebar from '../layout/RightSidebar';
import MainPage from './MainPage';

const HotDeals = () => {
    return (
        <Grid2 sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>

            <Grid2 item xs={12} sm={3}>
                <Box>
                    <LeftSidebar />
                </Box>

            </Grid2>
            <Grid2 item xs={12} sm={6}>
                <Box>
                    <MainPage />
                </Box>

            </Grid2>
            <Grid2 item xs={12} sm={6}>

                <Box>
                    <RightSidebar />
                </Box>

            </Grid2>

        </Grid2>

    )
}

export default HotDeals