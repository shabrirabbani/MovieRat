import React, {useState} from "react";
import MovieTrailer from "./MovieTrailer";
import { IconPlayerPlay, IconStarFilled } from "@tabler/icons-react";

export default function Header({
  originalTitle,
  overview,
  backdropPath,
  posterPath,
  releaseDate,
  genres,
  runtime,
  tagline,
  releaseYear,
  movieId,
  rating,
  vote
}) {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const openTrailer = () => {
    setIsTrailerOpen(true);
  };

  const closeTrailer = () => {
    setIsTrailerOpen(false);
  };

  return (
    <div>
      <div className="relative h-screen w-full flex flex-col sm:flex-row items-center justify-start">
        <img
          src={backdropPath}
          alt="Movie"
          className="object-cover w-full h-1/2 absolute inset-0 z-0 brightness-35 transition-opacity duration-1000 ease-out"
        />

        <div className="container mx-auto max-w-screen-xl p-4 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center z-20 justify-center relative">
            <img
              src={posterPath}
              className="w-48 h-72 mt-20 sm:mt-0 sm:w-72 sm:h-96 p-2 bg-slate-100 rounded-md"
            />
            <div className="ms-0 sm:ms-5 mt-4 sm:mt-0">
              <div className="mt-6 sm:mt-28">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <p className="font-bold text-2xl sm:text-4xl">
                      {originalTitle}{" "}
                      <span className="font-semibold text-xl sm:text-3xl text-gray-300">
                        ({releaseYear})
                      </span>
                    </p>
                    <p className="mt-2 sm:mt-0 text-sm sm:text-base">
                      {releaseDate} • {genres} • {runtime}
                    </p>
                  </div>
                  <button
                    className="mt-4 sm:mt-0 bg-blue-500 p-2 rounded-full hover:bg-blue-600"
                    onClick={openTrailer}>
                    <div className="flex items-center">
                      <IconPlayerPlay size={20} />
                      <p className="ms-1">Play Trailer</p>
                    </div>
                  </button>
                </div>
              </div>

              <div className="mt-4 sm:mt-6">
                <div className="flex bg-slate-500 w-fit p-1 rounded-lg items-center">
                  <IconStarFilled color="yellow" size={20} />
                  <p className="ms-2 font-bold text-lg">
                    {rating?.toFixed(1)}
                    <span className="text-xs font-light">/10</span>
                  </p>
                  <p className="ms-1 text-xs font-light">({vote})</p>
                </div>
                <p className="italic text-gray-300 mt-2">{tagline}</p>
                <p className="font-bold text-lg sm:text-xl mt-2">Overview</p>
                <p className="text-justify text-sm sm:text-base">{overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal untuk Trailer */}
      {isTrailerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="relative bg-black w-full max-w-xs sm:max-w-4xl p-2 sm:p-4">
            <div className="flex justify-between mx-2 my-2">
              <p className="font-semibold">Play Trailer</p>
              <button className="text-white" onClick={closeTrailer}>
                X
              </button>
            </div>
            <MovieTrailer movieId={movieId} />
          </div>
        </div>
      )}
    </div>
  );
}
