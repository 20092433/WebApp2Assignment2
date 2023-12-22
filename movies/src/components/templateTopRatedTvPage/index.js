import React, { useState, useEffect } from "react";
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getMovieImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import TopRatedTvHeader from "../headerTopRatedTv";
import { getTvImages } from "../../api/tmdb-api";

const TemplateTopRatedTvPage = ({ topRatedTv, children }) => {
  //checks to see if images is cached and if it not creates a func call to the api to get the image
  //if it shows up in the flower you know its cached
    const { data , error, isLoading, isError } = useQuery(
        ["images", { id: topRatedTv.id }],
        getTvImages
      );
    
      if (isLoading) {
        return <Spinner />;
      }
    
      if (isError) {
        return <h1>{error.message}</h1>;
      }
      const images = data.posters 

  return (
    <>
      <TopRatedTvHeader topRatedTv={topRatedTv}></TopRatedTvHeader>

      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <ImageList 
                cols={1}>
                {images.map((image) => (
                    <ImageListItem key={image.file_path} cols={1}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                        alt={image.poster_path}
                    />
                    </ImageListItem>
                ))}
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateTopRatedTvPage;