import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AuthContextProvider from "./contexts/authContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import UpcomingMovies from "./pages/upcomingMovies";
import FamousActorsPage from "./pages/famousActorsPage";
import ActorDetails from "./components/actorDetails";
import ActorCard from "./components/actorCard";
import SignUpPage from "./pages/signUpPage";
import LoginPage from "./pages/loginPage";

import TemplateTopRatedTvPage from "./components/templateTopRatedTvPage";


import SiteHeader from './components/siteHeader'
import ActorPage from "./pages/actorDetailsPage";
import TopRatedTvPage from "./pages/topRatedTvPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import ProtectedRoutes from "./protectedRoutes";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <AuthContextProvider>
        <Routes>
       
       
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={ <Navigate to="/" /> } />

        <Route path="/signup" element={ <SignUpPage /> } />
          <Route element={<ProtectedRoutes />}>
          
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/upcoming" element={<UpcomingMovies />} />
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/movies/popular" element={ <PopularMoviesPage /> } />
          <Route path="/actors/famous" element={ <FamousActorsPage /> } />

          <Route path="/" element={<LoginPage />} />
          <Route path="/tvshows/topRated" element={ <TopRatedTvPage /> } />
          <Route path="/movies/topRated" element={ <TopRatedMoviesPage /> } />
         

          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/actors/:id" element={<ActorDetails />} />
          <Route path="/movies/discover" element={<HomePage />} />
          
          </Route>
        </Routes>
        
        </AuthContextProvider>
        </MoviesContextProvider>
        
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);