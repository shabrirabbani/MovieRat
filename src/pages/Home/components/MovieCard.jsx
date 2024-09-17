import React from "react";
import {Link} from "react-router-dom";

export default function MovieCard({movie}) {
  return (
    <Link to={`/movie/${movie.id}`} className="block rounded-lg shadow">
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-48 h-60 object-fill"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="px-2 text-center">
          <h5 className="mb-2 text-md font-light tracking-tight text-white w-48">
            {movie.title}
          </h5>
        </div>
      </div>
    </Link>
  );
}
