import React, { useState } from "react";
import Header from "../headerMovieList";
import TopRatedTvHeader from "../headerTopRatedTv";
import FilterCard from "../filterMoviesCard";
import FilterTopRatedTvCard from "../filterTopRatedTvCard";
import MovieList from "../movieList";
import TopRatedTvList from "../topRatedTvList";
import Grid from "@mui/material/Grid";

function TopRatedTvListPageTemplate({ topRatedTvs, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedTvs = topRatedTvs
    .filter((m) => {
      return  m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
     });
    //  .filter((m) => {
    //    return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    //  });

    const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    
      else setGenreFilter(value);
      };

  return (
    
    
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <TopRatedTvHeader title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            //genreFilter={genreFilter}
          />
        </Grid>
        <TopRatedTvList  topRatedTvs={displayedTvs} action={action}  ></TopRatedTvList>
      </Grid>
    </Grid>
  );
}
export default TopRatedTvListPageTemplate;