import React from 'react'
import { Box, Typography, IconButton } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import GroupIcon from '@mui/icons-material/Group';
import QrCodeIcon from '@mui/icons-material/QrCode';
const RightSidebar = () => {
    return (
        <Box>
            {/* QR Code Section */}
            <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                <QrCodeIcon />
                <Typography>Shop quick smart on the app</Typography>
            </Box>

            {/* Help Center Section */}
            <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                <HelpIcon />
                <Typography>Visit the Help Centre</Typography>
            </Box>

            {/* Join Team Section */}
            <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                <GroupIcon />
                <Typography>Join our team</Typography>
            </Box>
        </Box>

    )
}

export default RightSidebar