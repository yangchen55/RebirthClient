import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Button, ButtonGroup, styled, alpha } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '50px',
    backgroundColor: alpha(theme.palette.primary.dark, 0.5),
    border: `2px solid transparent`,  // Initial transparent border to prevent resizing on hover
    '&:hover': {
        border: `2px solid ${theme.palette.secondary.dark}`,  // Changes border color on hover
    },
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '70%',
    },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'first',
    borderRadius: '50px',
}));



const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#000000',  // Sets the text color to black
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
            '&:focus': {
                width: '30ch', // Expands the input when focused
            },
        },
    },
}));



const CustomButton = styled(Button)(({ theme }) => ({
    color: theme.palette.secondary.dark,        // Uses primary color from theme
    fontWeight: theme.typography.fontWeightBold, // Uses bold font weight from theme
    textTransform: 'none',                   // No text transformation
    fontSize: theme.typography.button.fontSize, // Uses font size defined for buttons in theme
    '&:hover': {
        backgroundColor: theme.palette.action.hover, // Background color on hover from theme
        color: theme.palette.primary.dark // Darkens the text color on hover
    }
}));
const Header = () => {



    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{
                    flexDirection: "column", borderBottom: "2px solid #8B0000"
                }}>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', m: 2 }}>
                        <Box sx={{ display: 'flex', width: '70%', justifyContent: 'flex-start' }}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                KOGAN.COM
                            </Typography>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search over millions items"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>

                        </Box>

                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <ButtonGroup sx={{ display: "flex", justifyContent: 'space-around' }}>
                                <CustomButton variant="text">🖤 WishList</CustomButton>
                                <Button
                                    sx={{
                                        borderRadius: "50px",
                                        backgroundColor: "red",
                                        '&:hover': {
                                            backgroundColor: "grey",
                                            color: "white"

                                        }
                                    }}
                                >
                                    Add to cart
                                </Button>
                            </ButtonGroup>
                        </Box>




                    </Box>


                    {/* second row */}

                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', mb: 2 }}>
                        <Box sx={{ display: 'flex', width: '70%', alignItems: 'flex-start' }}>
                            <CustomButton>Shop by Department</CustomButton>
                            <Link to="/recentlyViewed">
                                <CustomButton>recently viewed</CustomButton>
                            </Link>
                            <Link to="/hotDeals">
                                <CustomButton>Hot Deals</CustomButton>
                            </Link>
                            <Link to="/clearance">
                                <CustomButton>clearance</CustomButton> </Link>
                        </Box>


                        <Box sx={{ display: 'flex', width: '20%', alignContent: "flex-end" }}>
                            <CustomButton>try for free</CustomButton>
                            <CustomButton>deliver to</CustomButton>
                            <CustomButton>sign in</CustomButton>
                        </Box>


                    </Box>




                </Toolbar>
            </AppBar>

        </Box >
    );
}

export default Header




