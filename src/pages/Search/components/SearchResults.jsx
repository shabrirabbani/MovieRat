import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { fetchSearchResults, fetchTvShowResults, setSearchType } from "../../../redux/features/searchSlice";


export default function SearchResults() {
     const dispatch = useDispatch();
     const query = useSelector((state) => state.searchMovies.query);
     const movieResults = useSelector((state) => state.searchMovies.movieResults);
     const tvShowResults = useSelector((state) => state.searchMovies.tvShowResults);
     console.log(movieResults);

     const handleMoviesClick = () => {
       dispatch(setSearchType("movie"));
       if (query) {
         dispatch(fetchSearchResults(query));
       }
     };

     const handleTvShowsClick = () => {
       dispatch(setSearchType("tvshow"));
       if (query) {
         dispatch(fetchTvShowResults(query)); 
       }
     };


  return (
    <div className="px-5 sm:px-0">
        <div className="bg-white rounded-md">
            <p className="p-3 text-center bg-gray-500 rounded-t-md">Search Results</p>
            <div className="p-4">
                <p className="cursor-pointer" onClick={handleMoviesClick}>
                Movies {movieResults.length > 0 && `(${movieResults.length})`}
                </p>
                <p className="cursor-pointer hover:bg-slate-500" onClick={handleTvShowsClick}>
                TV Shows {tvShowResults.length > 0 && `(${tvShowResults.length})`}
                </p>
            </div>
        </div>
    </div>
  );
}
