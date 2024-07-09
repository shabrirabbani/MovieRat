import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import API_URL from '../../../api/APIUrl'

const fetchData = async (setMovies, setTotalPages, page) => {
    try {
        const response = await axios.get(`${API_URL}&page=${page}`)
        setMovies(response.data.results)
        setTotalPages(response.data.total_pages)
        console.log(response.data)
    } catch (error) {
        console.error(error)
    }
}

export default function ListMovie() {
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        fetchData(setMovies, setTotalPages, currentPage)
    }, [currentPage])

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }


  return (
    <div className='bg-black'>
      <div className="container max-w-screen-xl">
        <p className="text-center text-2xl font-bold py-10 text-white">ALL MOVIES</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={handlePrevPage}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            disabled={currentPage === 1}>
            Prev
          </button>
          <span className='text-white'>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
