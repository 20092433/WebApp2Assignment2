import React, { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import { getActorTaggedImages } from "../../api/tmdb-api";



const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };



const ActorDetails = ({ actor }) => {
    const [taggedImages, setTaggedImages] = useState([]);
    console.log(actor)

    useEffect(() => {
        const fetchTaggedImages = async () => {
            try {
                const images = await getActorTaggedImages(actor.id);
                setTaggedImages(images);
            } catch (error) {
                // Handle error if needed
            }
        };

        fetchTaggedImages();
    }, [actor.id]);

    // If taggedImages is still false, return a loading state or null
    if (taggedImages === false) {
        return <p>Loading...</p>; // You can replace this with your loading component or return null
    }

    return (
        <>
            <Typography variant="h5" component="h3">
                Tagged Photos of {actor.name}
            </Typography>

            <div style={root}>
                {taggedImages.map((image) => (
                    <img
                        key={image.id}
                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                        alt={image.file_path}
                        style={chip}
                    />
                ))}
            </div>
        </>
    );
};

export default ActorDetails;
