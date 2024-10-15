import React from 'react'
import { Grid, Box, Grid2 } from '@mui/material';
import LeftSidebar from '../layout/LeftSidebar';
import RightSidebar from '../layout/RightSidebar';
import MainPage from './MainPage';

const HotDeals = () => {
    return (
        <Grid2 sx={{ display: 'flex', justifyContent: "space-between", m: 5 }}>

            <Grid2 item xs={12} sm={6} md={3} sx={{ width: '20%', display: { xs: 'none', sm: 'block', md: 'block' } }}>
                <Box>
                    <LeftSidebar />
                </Box>

            </Grid2>
            <Grid2 item xs={12} sm={6} md={6} sx={{ width: '80%' }}>
                <Box>
                    <MainPage />
                </Box>




            </Grid2>
            <Grid2 item xs={12} sm={6} md={3} sx={{
                display: {
                    width: '20%',
                    xs: 'none', sm: 'none', md: 'block'
                }
            }}>

                <Box >
                    <RightSidebar />
                </Box>

            </Grid2>

        </Grid2>

    )
}

export default HotDeals