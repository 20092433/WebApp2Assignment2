import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import ActorDetails from "../components/actorDetails";
import PageTemplate from "../components/templateMoviePage";
import TemplateActorPage from "../components/templateActorPage";
import { getFamousActors } from "../api/tmdb-api";
import { getMovie } from '../api/tmdb-api';
import ActorListPageTemplate from "../components/templateActorListPage";
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
// import useMovie from "../hooks/useMovie"; 


const ActorPage = (props) => {
  //allows compo.nent to extract the movie id from the browsers parameterized url address
  const { id } = useParams();
  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    getFamousActors
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {actor ? (
        <>
        //show template of one movie
          <PageTemplate actor={actor}>
            <ActorDetails actor={actor} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorPage;