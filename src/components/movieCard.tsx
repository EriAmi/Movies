import { imageUrlPart } from "@/app/constants";
import { Genre } from "@/app/interfaces/IMovie";
import Image from "next/image";

const MovieCard: React.FC<{
  title: string;
  posterPath: string;
  overview?: string;
  genres?: Genre[];
  type: "general" | "detailed";
}> = ({ title, posterPath, overview, genres, type }) => {
  return (
    <div
      className={`max-w-sm rounded overflow-auto shadow-lg  bg-slate-300 mx-2 ${
        type === "general" ? " hover:cursor-pointer" : "hover:cursor-default"
      }`}
    >
      <Image
        src={`${imageUrlPart}/${posterPath}`}
        alt={`${title} poster`}
        width={400}
        height={400}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 sm:text-lg text-center">
          {title}
        </h2>
        {overview && <p className="text-gray-700 text-base">{overview}</p>}
      </div>
      <div className="px-6 pb-2">
        {genres &&
          genres.map((genre) => (
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2 text-sm font-semibold text-gray-700 "
              key={genre.id}
            >
              #{genre.name}
            </span>
          ))}
      </div>
    </div>
  );
};

export default MovieCard;
