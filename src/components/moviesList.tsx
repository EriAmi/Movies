"use client";

import MovieCard from "@/components/movieCard";
import SearchField from "@/components/searchField";
import { useState } from "react";
import ErrorMessage from "./errorMessage";
import Link from "next/link";

const MoviesList: React.FC<{
  movies: Movie[];
}> = ({ movies }) => {
  const [searchInput, setSearchInput] = useState<string>("");

  const filteredMovies = movies.filter((movie) => {
    return searchInput.toLowerCase() === ""
      ? true
      : movie.title
          .toLowerCase()
          .split(" ")
          .some((word) => word.startsWith(searchInput));
  });

  return (
    <div className=" my-6 lg:w-2/6 overflow-hidden">
      <div className="flex items-center justify-center">
        <SearchField setSearchInput={setSearchInput} />
      </div>
      {filteredMovies && filteredMovies.length > 0 ? (
        filteredMovies.map((movie, index) => (
          <div
            className="pt-4 flex  items-center justify-center"
            key={movie.id + index}
          >
            <Link href={`/movies/${movie.id}`}>
              <MovieCard
                title={movie.title}
                posterPath={movie.backdrop_path}
                type="general"
              />
            </Link>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center">
          <ErrorMessage title="No result" message="Change your search input" />
        </div>
      )}
    </div>
  );
};

export default MoviesList;
