import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import img from '../../images/film-poster-placeholder.png'

export default function TopRatedTvCard({ topRatedTv, action }) {
    // const { favorites, addToFavorites } = useContext(MoviesContext);

    // if (favorites.find((id) => id === topRatedTv.id)) {
    //      topRatedTv.favorite = true;
    // } else {
    //     topRatedTv.favorite = false
    // }

    // const handleAddToFavorite = (e) => {
    //     e.preventDefault();
    //     addToFavorites(topRatedTv);
    // };

console.log(topRatedTv)

    return (
        //"this is one card"
        
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    topRatedTv.title ? (
                        <Avatar sx={{ backgroundColor: 'red' }}>
                            <FavoriteIcon />
                        </Avatar>
                    ) : null
                }

            />
            <CardMedia
                sx={{ height: 500 }}
                image={
                    topRatedTv.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${topRatedTv.poster_path}`
                        : img
                }
            />
            <CardContent>
                <Grid container>
                    <Grid item xs={6}>
                       
                    </Grid>
                    <Grid item xs={6}>
                       
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions disableSpacing>
                
               
                    <Button variant="outlined" size="medium" color="primary">
                        More Info ...
                    </Button>
               
            </CardActions>
        </Card>
    );
}

