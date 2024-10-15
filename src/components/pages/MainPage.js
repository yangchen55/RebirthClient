import React from 'react';
import { Box, Typography, Button, Grid, Divider, Avatar, Pagination } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import CSS for carousel
import hotDealMain from '../../assets/hotDealsMain.png';
import AvatarImageScroll from '../../reusable/AvatarImageScroll';
import { Card } from 'react-bootstrap';
import CustomizedCard from '../../reusable/CustomizedCard';

const MainPage = () => {
    const avatarUrls = [
        'https://randomuser.me/api/portraits/men/1.jpg',
        'https://randomuser.me/api/portraits/women/2.jpg',
        'https://randomuser.me/api/portraits/men/3.jpg',
        'https://randomuser.me/api/portraits/women/4.jpg',
        'https://randomuser.me/api/portraits/men/5.jpg',
        'https://randomuser.me/api/portraits/women/6.jpg',
        'https://randomuser.me/api/portraits/men/7.jpg',
        'https://randomuser.me/api/portraits/women/8.jpg',
        'https://randomuser.me/api/portraits/men/9.jpg',
        'https://randomuser.me/api/portraits/women/10.jpg',
        'https://randomuser.me/api/portraits/men/11.jpg',
        'https://randomuser.me/api/portraits/women/12.jpg',
        'https://randomuser.me/api/portraits/men/13.jpg',
        'https://randomuser.me/api/portraits/women/14.jpg',
        'https://randomuser.me/api/portraits/men/15.jpg',
        'https://randomuser.me/api/portraits/women/16.jpg',
        'https://randomuser.me/api/portraits/men/17.jpg',
        'https://randomuser.me/api/portraits/women/18.jpg',
        'https://randomuser.me/api/portraits/men/19.jpg',
        'https://randomuser.me/api/portraits/women/20.jpg'
    ];
    const cardsData = [
        {
            image: 'https://via.placeholder.com/140',
            title: "Kogan 75'' LED 4K Smart Roku TV",
            description: "Get the best deals on TVs, appliances, and more with Hot Deals.",
            price: "$859",
            discount: "SRP $1,899.99",
            label: "Christmas Ideas",
            onButtonClick: () => alert('Buying this product!'),
        },
        {
            image: 'https://via.placeholder.com/140',
            title: "Samsung 65'' QLED 8K Smart TV",
            description: "Unbelievable clarity and colors with 8K resolution.",
            price: "$1,599",
            discount: "SRP $2,299.99",
            label: "Holiday Special",
            onButtonClick: () => alert('Buying this product!'),
        },
        {
            image: 'https://via.placeholder.com/140',
            title: "Sony 55'' 4K HDR Smart TV",
            description: "Crystal clear picture with HDR and smart functionality.",
            price: "$799",
            discount: "SRP $1,299.99",
            label: "Best Value",
            onButtonClick: () => alert('Buying this product!'),
        },
        {
            image: 'https://via.placeholder.com/140',
            title: "LG 85'' NanoCell TV",
            description: "Experience pure colors with LG's NanoCell technology.",
            price: "$2,299",
            discount: "SRP $3,299.99",
            label: "Limited Time Offer",
            onButtonClick: () => alert('Buying this product!'),
        },
        {
            image: 'https://via.placeholder.com/140',
            title: "Panasonic 65'' OLED TV",
            description: "Ultimate picture quality with OLED and deep blacks.",
            price: "$1,999",
            discount: "SRP $2,799.99",
            label: "Season Special",
            onButtonClick: () => alert('Buying this product!'),
        },
        {
            image: 'https://via.placeholder.com/140',
            title: "TCL 50'' 4K UHD TV",
            description: "Affordable 4K TV with built-in Roku.",
            price: "$399",
            discount: "SRP $599.99",
            label: "Hot Deal",
            onButtonClick: () => alert('Buying this product!'),
        },
        {
            image: 'https://via.placeholder.com/140',
            title: "Hisense 58'' 4K UHD TV",
            description: "Great picture quality at an unbeatable price.",
            price: "$529",
            discount: "SRP $799.99",
            label: "Clearance",
            onButtonClick: () => alert('Buying this product!'),
        },
        {
            image: 'https://via.placeholder.com/140',
            title: "Philips 75'' Ambilight TV",
            description: "Immersive experience with Ambilight technology.",
            price: "$1,699",
            discount: "SRP $2,399.99",
            label: "Exclusive Offer",
            onButtonClick: () => alert('Buying this product!'),
        },
        {
            image: 'https://via.placeholder.com/140',
            title: "Vizio 70'' Quantum 4K TV",
            description: "Quantum dot color and excellent contrast.",
            price: "$1,149",
            discount: "SRP $1,799.99",
            label: "Year-End Sale",
            onButtonClick: () => alert('Buying this product!'),
        },
    ];


    return (
        <Box sx={{ backgroundColor: "pink", mx: 2 }}>
            <Typography variant='h6' sx={{ fontWeight: "bold", textAlign: "left", mx: 2 }}>Hot Deals</Typography>

            <img
                src={hotDealMain}
                alt="kogan image"
                style={{ maxWidth: '97%', height: 'auto' }}
                loading="lazy"
            />

            <Box sx={{ display: 'flex', alignItems: 'center', mx: 2, my: 2 }}>
                <Typography variant="h6" sx={{ textAlign: "left", mr: 2 }}>
                    Shop By Category
                </Typography>
                <Divider sx={{ flexGrow: 1, height: '1px', backgroundColor: 'grey' }} />
            </Box>


            <AvatarImageScroll avatarUrls={avatarUrls} />

            <Typography variant='body2' sx={{ textAlign: "left", m: 4 }}>
                Get the best deals on TVs, appliances, and more with Hot Deals. Find unbeatable prices and discounts on top brands. Don't miss out on these hot savings!
            </Typography>


            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', }}>
                {cardsData.map((card, index) => (
                    <CustomizedCard
                        image="https://via.placeholder.com/140"
                        title="Kogan 75'' LED 4K Smart Roku TV"
                        description="Get the best deals on TVs, appliances, and more with Hot Deals."
                        price="$859"
                        discount="SRP $1,899.99"
                        label="Christmas Ideas"
                        onButtonClick={() => alert('Buying this product!')}
                    />
                ))}
            </Box>



        </Box>
    );
};

export default MainPage;
