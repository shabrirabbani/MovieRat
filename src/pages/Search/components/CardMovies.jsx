import React from 'react'
import { Link } from 'react-router-dom';

export default function CardMovies({movie}) {

    const formattedDate = new Date(movie.release_date || movie.first_air_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    );

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="flex-1 ps-5 pe-5 sm:ps-10 ">
        <div className="bg-gray-700 w-full rounded-md shadow-md shadow-slate-600 overflow-hidden hover:bg-gray-800 mb-10 border-2 border-gray-600 hover:shadow-slate-800">
          <div className="flex flex-col sm:flex-row">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="Poster"
              className="object-cover sm:w-24"
            />
            <div className="p-4 flex-1 min-w-0 text-white">
              <div className="text-lg font-semibold">{movie.title || movie.name}</div>
              <div className="text-sm font-light mb-4 text-gray-400">
                {formattedDate}
              </div>
              <div className="text-sm text-justify line-clamp-2">
                {movie.overview}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
