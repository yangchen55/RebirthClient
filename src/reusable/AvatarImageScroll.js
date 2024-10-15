import React, { useState } from 'react';
import { Avatar, Box, Grid, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const avatarsPerPage = 8; // Display 8 avatars per page

const AvatarImageScroll = ({ avatarUrls }) => {
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(avatarUrls.length / avatarsPerPage);

    const handleNext = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePrevious = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    // Calculate which avatars to display based on the page number
    const startIndex = (page - 1) * avatarsPerPage;
    const currentAvatars = avatarUrls.slice(startIndex, startIndex + avatarsPerPage);

    return (

        <Grid container sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            {/* Left Arrow - 20% width */}
            <Grid item sx={{ width: '15%', display: 'flex', justifyContent: 'center' }}>
                <IconButton onClick={handlePrevious} disabled={page === 1} aria-label="previous page">
                    <ArrowBackIosIcon />
                </IconButton>
            </Grid>

            {/* Middle Section - 80% width */}
            <Grid item sx={{ width: '70%' }}>
                <Box
                    sx={{
                        display: 'flex',
                        overflowX: 'auto',  // Enables horizontal scrolling
                        whiteSpace: 'nowrap', // Keeps items in a single row
                        justifyContent: 'space-between', // Distribute evenly
                        "&::-webkit-scrollbar": { display: "none" }, // Optionally hide scrollbar
                        m: 2
                    }}
                >
                    {currentAvatars.map((url, index) => (
                        <Box
                            key={index}
                            sx={{
                                flexShrink: 0,
                                width: { xs: '100%', sm: '50%', md: '25%', lg: '10%' }, // Responsive widths
                                maxWidth: { xs: '100%', sm: '50%', md: '25%', lg: '10%' },
                                display: "flex",

                            }}
                        >
                            <Avatar src={url} alt={`Avatar ${index}`} sx={{ width: 80, height: 80 }} />
                        </Box>
                    ))}
                </Box>
            </Grid>

            {/* Right Arrow - 10% width */}
            <Grid item sx={{ width: '15%', display: 'flex', justifyContent: 'center' }}>
                <IconButton onClick={handleNext} disabled={page === totalPages} aria-label="next page">
                    <ArrowForwardIosIcon />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default AvatarImageScroll;
