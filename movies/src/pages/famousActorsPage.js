import React from "react";

import { getFamousActors } from "../api/tmdb-api";
import PageTemplate from '../components/templateActorListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';


const FamousActorsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('famous actors', getFamousActors)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = actors.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  //const addToFavorites = (movieId) => true 

  return (
     <PageTemplate
       title="Famous Actors"
       actors={actors}
       action={(actor) => {
         
       }}
     />
    //"hello world"
);
};
export default FamousActorsPage;