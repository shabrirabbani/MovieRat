import React, { useEffect, useRef, useState } from 'react'
import MovieCard from './MovieCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies, setCurrentPage } from '../../../redux/features/movieSlice'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'


export default function NowPlaying() {
    const dispatch = useDispatch()
    const {movies, currentPage, totalPages, status, error} = useSelector((state) => state.movies)
    const [showScrollLeft, setShowScrollLeft] = useState(false);
    const [showScrollRight, setShowScrollRight] = useState(false);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        dispatch(fetchMovies(currentPage))
    }, [dispatch, currentPage])

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


  return (
    <div className="bg-black">
      <div className="container max-w-screen-xl">
        <div className='flex justify-between pt-10'>
          <p className="text-start text-2xl font-bold text-white ps-5">
            Now Playing's
          </p>
        </div>
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
              <IconChevronLeft size={50} />
            </button>
          )}
          <div className="overflow-x-auto hide-scrollbar"
          ref={scrollContainerRef}>
            <div className="flex space-x-2 w-max p-3">
              {movies.map((movies) => (
                <MovieCard key={movies.id} movie={movies} />
              ))}
            </div>
          </div>
          {showScrollRight && (
            <button
              onClick={scrollRight}
              className="absolute -right-12 top-1/2 transform -translate-y-1/2 text-white p-2  z-30">
              <IconChevronRight size={50} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}