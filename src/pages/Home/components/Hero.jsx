import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import TopTenCard from "./TopTenCard";
import {fetchTrendingMovies} from "../../../redux/features/trendingSlice";
import { motion } from "framer-motion";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Hero() {
  const dispatch = useDispatch();
  const {movies, status, error} = useSelector((state) => state.trendingMovies);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showTrendNow, setShowTrendNow] = useState(false);
  const [showScrollLeft, setShowScrollLeft] = useState(false);
  const [showScrollRight, setShowScrollRight] = useState(false);
   const scrollContainerRef = useRef(null);

  useEffect(() => {
    dispatch(fetchTrendingMovies(1));
  }, [dispatch]);


  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
    setShowTrendNow(true);
  };

  const formatDate = (dateStr) => {
    const date =  new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

   const scrollLeft = () => {
     if (scrollContainerRef.current) {
       scrollContainerRef.current.scrollBy({
         left: -1220, 
         behavior: "smooth",
       });
     }
   };

   const scrollRight = () => {
     if (scrollContainerRef.current) {
       scrollContainerRef.current.scrollBy({
         left: 1220, 
         behavior: "smooth",
       });
     }
   };

  if (status === "loading") {
    return <div className="text-white">Loading...</div>;
  }

  if (status === "failed") {
    return <div className="text-white">Error: {error}</div>;
  }

  const topMovie = selectedMovie || movies[0];

  return (
    <div>
      {topMovie && (
        <div className="relative h-screen w-full flex items-center justify-start">
          <img
            src={`https://image.tmdb.org/t/p/original${topMovie.backdrop_path}`}
            alt={topMovie.title}
            className="object-cover w-full h-full absolute inset-0 z-0 brightness-35 transition-opacity duration-1000 ease-out"
          />
          <div className=" container mx-auto max-w-screen-xl">
            <motion.div
              key={topMovie.id}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 1, ease: "easeOut"}}
              className="z-20 relative p-2 text-start text-white">
              <div className="mb-1">
                {topMovie.adult ? (
                  <div className="border border-gray-400 max-w-fit px-1 rounded-lg">
                    18+
                  </div>
                ) : (
                  <div className="border border-gray-400 max-w-fit px-1 rounded-lg">
                    13+
                  </div>
                )}
              </div>
              <p className="mb-4">{formatDate(topMovie.release_date)}</p>
              <h1 className="text-3xl font-bold">{topMovie.title}</h1>
              <h2 className="mt-4 w-1/2 text-gray-400">{topMovie.overview}</h2>
              <div className="flex flex-row mt-5 justify-start space-x-4">
                <Link to={`/movie/${topMovie.id}`}>
                  <motion.button
                    whileHover={{scale: 1.07}}
                    whileTap={{scale: 0.95}}
                    className="bg-gradient-to-r from-cyan-600/70 to-blue-600/70 hover:from-cyan-600/90 hover:to-blue-600/90 shadow-lg text-white py-2 px-4 rounded-lg ease-out duration-300">
                    See Details
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      )}
      <div className="container mx-auto max-w-screen-xl relative z-20 -mt-44">
        <p className="text-white">Trend's Now</p>
        <div
          className="relative"
          onMouseEnter={() => {
            setShowScrollRight(true); 
            setShowScrollLeft(true);
          }}
          onMouseLeave={() => {
            setShowScrollRight(false); 
            setShowScrollLeft(false);
          }}>
          {showScrollLeft && (
            <button
              onClick={scrollLeft}
              className="absolute -left-12 top-1/2 transform -translate-y-1/2  text-white p-2  z-30">
              <IconChevronLeft size={50}/>
            </button>
          )}
          <div
            className="overflow-x-auto hide-scrollbar"
            ref={scrollContainerRef}>
            <div className="flex space-x-5 w-max p-3">
              {movies.slice(0, 10).map((movie) => (
                <TopTenCard
                  key={movie.id}
                  movie={movie}
                  className="flex-none w-64"
                  onClick={() => handleSelectMovie(movie)}
                />
              ))}
            </div>
          </div>
          {showScrollRight && (
            <button
              onClick={scrollRight}
              className="absolute -right-12 top-1/2 transform -translate-y-1/2 text-white p-2  z-30">
              <IconChevronRight size={50}/>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
