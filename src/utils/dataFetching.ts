import { baseUrl } from "@/app/constants";
import { MovieData } from "@/app/interfaces/IMovie";

export const getMovie = async (
  movieId: number
): Promise<MovieData | undefined> => {
  const url = `${baseUrl}movie/${movieId}?api_key=${process.env.API_KEY}`;
  const options = { method: "GET", headers: { accept: "application/json" } };

  try {
    const result = await fetch(url, options);
    if (!result.ok)
      throw new Error(`Request failed with status ${result.status}`);

    return result.json();
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getPopularMovies = async (): Promise<
  | {
      page: number;
      results: Movie[];
    }
  | undefined
> => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.BEARER as string,
    },
  };

  try {
    const result = await fetch(url, options);
    if (!result.ok)
      throw new Error(`Request failed with status ${result.status}`);

    return result.json();
  } catch (error) {
    console.error("Error:", error);
  }
};
