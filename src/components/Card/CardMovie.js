import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import notAvailableImage from '../Header/Image_not_available.png'

export default function CardMovie({ showMovie }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={showMovie.Poster !== "N/A" ? showMovie.Poster : notAvailableImage}
                    alt="Movie"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {showMovie.Title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {showMovie.Plot}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <h5>{showMovie.Year}</h5>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}