import React from 'react'

export default function MovieCard({movie}) {
  return (
    <div>
      <div className="max-w-52 bg-gray-700 rounded-lg shadow flex flex-col justify-center items-center">
        <a href="#">
          <img
            className="rounded-lg p-4 w-48 h-60 object-fill"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </a>
        <div className="px-2 text-center">
          <a href="#">
            <h5 className="mb-2 text-md font-bold tracking-tight text-white">
              {movie.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-400 ">
            {movie.release_date}
          </p>
        </div>
      </div>
    </div>
  );
}
