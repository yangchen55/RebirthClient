import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';



const CustomizedCard = ({ image, title, description, price, discount, label, onButtonClick }) => {

    return (
        <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={title}
                />
                <CardContent>
                    {label && (
                        <Typography variant="caption" sx={{ backgroundColor: 'red', color: 'white', p: 0.5 }}>
                            {label}
                        </Typography>
                    )}
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    {price && (
                        <Typography variant="h6" sx={{ mt: 1 }}>
                            {price}
                        </Typography>
                    )}
                    {discount && (
                        <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>
                            {discount}
                        </Typography>
                    )}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={onButtonClick}>
                    Buy Now
                </Button>
            </CardActions>
        </Card>
    );
};




export default CustomizedCard

