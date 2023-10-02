import { getPopularMovies } from "@/utils/dataFetching";
import React from "react";
import MoviesList from "../../components/moviesList";

const Movies = async () => {
  const popularMovies = await getPopularMovies();
  if (!popularMovies) return;

  return (
    <div className="flex items-center justify-center">
      <MoviesList movies={popularMovies.results} />
    </div>
  );
};

export default Movies;
