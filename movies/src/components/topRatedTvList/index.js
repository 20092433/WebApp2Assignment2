import React from "react";
import Movie from "../movieCard";
import TopRatedTVCard from "../topRatedTvCard";
import Grid from "@mui/material/Grid";


const TopRatedTvList = ( {topRatedTvs, action }) => {
  let topRatedTvCards = topRatedTvs.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TopRatedTVCard key={m.id} topRatedTv={m} action={action} />
    </Grid>
  ));
  //console.log(topRatedTvs)
  return topRatedTvCards;
};

export default TopRatedTvList;