import React from "react";
//import { getTopRatedTVShows } from "../api/tmdb-api";
import { getPopularMovies } from "../api/tmdb-api";
import { getTopRatedTVShows } from "../api/tmdb-api";
import TopRatedTvListPageTemplate from "../components/templateTopRatedTvListPage";
import TopRatedTvList from "../components/topRatedTvList";
import TopRatedTvHeader from "../components/headerTopRatedTv";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

//declaring component named TopRatedTvPage that takes props as argument
const TopRatedTvPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('top_Rated_Tv', getTopRatedTVShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  


  //extract the results from the fetched data and assigning it to variable TopRatedTv
  const topRatedTvs = data.results;

  // Redundant, but necessary to avoid app crashing.
  //const favorites = topRatedTvs.filter(m => m.favorite)
  //localStorage.setItem('favorites', JSON.stringify(favorites))
  //const addToFavorites = (top) => true 

  return (

        "hello world"
    
    //  <TopRatedTvListPageTemplate
    //    title="Top Rated Tv"
    //    topRatedTvs={topRatedTvs}
    //   //  action={(action) => {
    //   //     return <AddToFavoritesIcon topRatedTv={topRatedTv} />
    //   //   }}
    //  />
    

   
);
};
export default TopRatedTvPage;