import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CardMovies from "./components/CardMovies";
import SearchResults from "./components/SearchResults";
import {useSelector} from "react-redux";
import CardTv from "./components/CardTv";

export default function Search() {
  const movieResults = useSelector((state) => state.searchMovies.movieResults || []);
  const tvShowResults = useSelector((state) => state.searchMovies.tvShowResults || []);
  const status = useSelector((state) => state.searchMovies.status);
  const searchType = useSelector((state) => state.searchMovies.searchType);

  const [searchPerformed, setSearchPerformed] = useState(false)

  const handleSearch = (query) => {
    setSearchPerformed(true);
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row pt-20 pb-20">
          {searchPerformed && (
            <>
              {/* Pada layar kecil (mobile), SearchResults berada di bawah */}
              <div className="w-full md:w-1/5 mb-6 md:mb-0">
                <SearchResults />
              </div>

              <div className="w-full md:w-4/5">
                {status === "loading" && (
                  <div className="text-gray-600 ps-10">Loading...</div>
                )}
                {status === "failed" && (
                  <div className="text-red-600 ps-10">
                    Failed to load search results.
                  </div>
                )}
                {searchType === "movie" &&
                  movieResults.length > 0 &&
                  movieResults.map((movie) => (
                    <CardMovies key={movie.id} movie={movie} />
                  ))}
                {searchType === "tvshow" &&
                  tvShowResults.length > 0 &&
                  tvShowResults.map((tvShow) => (
                    <CardTv key={tvShow.id} movie={tvShow} />
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
