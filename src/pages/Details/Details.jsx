import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovieDetails} from "../../redux/features/detailSlice";
import Header from "./components/Header";
import Cast from "./components/Cast";

export default function Details() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.detailMovies.movie) || {};

  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";
  const backdropPath = `${BASE_IMAGE_URL}${movie.backdrop_path}`;
  const posterPath = `${BASE_IMAGE_URL}${movie.poster_path}`;
  const genresList = movie.genres?.map((genre) => genre.name).join(", ");
  const runtime = movie.runtime;
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60; 
  const releaseYear = movie.release_date?.split("-")[0];

 useEffect(() => {
     dispatch(fetchMovieDetails(id));
 }, [dispatch, id]);

 function formatVoteCount(voteCount) {
   if (voteCount >= 1000) {
     return (voteCount / 1000).toFixed(1) + "K";
   }
   return voteCount;
 }


  return (
    <div className="text-white">
      <Header
        originalTitle={movie.original_title || "No Title Available"}
        overview={movie.overview || "No Overview Available"}
        backdropPath={backdropPath}
        posterPath={posterPath}
        releaseDate={movie.release_date || "No Release Date Available"}
        genres={genresList || []}
        runtime={`${hours}h ${minutes}m`}
        tagline={movie.tagline || "No Tagline Available"}
        releaseYear={releaseYear}
        movieId={id}
        rating={movie.vote_average}
        vote={formatVoteCount(movie.vote_count)}
      />
      <Cast />
    </div>
  );
}

