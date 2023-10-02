import MovieCard from "@/components/movieCard";
import { getMovie } from "@/utils/dataFetching";

interface MovieProps {
  params: { movieId: number };
}
const MoviePage: React.FC<MovieProps> = async ({ params }) => {
  const movie = await getMovie(params.movieId);

  if (!movie) return;
  return (
    <div className="flex align-center items-center justify-center mt-5 mb-5   ">
      <MovieCard
        movieId={params.movieId}
        title={movie.original_title}
        posterPath={movie.poster_path}
        overview={movie.overview}
        genres={movie.genres}
        type={"detailed"}
      />
    </div>
  );
};

export default MoviePage;
