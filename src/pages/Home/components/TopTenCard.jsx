import React from 'react'
import { motion } from 'framer-motion';
import { IconStarFilled } from '@tabler/icons-react';

export default function TopTen({movie, onClick}) {

  const handleClick = () => {
    onClick(movie)
  }

  return (
    <div>
      <motion.div
        whileHover={{scale: 1.02}}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5, ease: "easeOut"}}
        onClick={handleClick}
        className="flex flex-col items-center bg-gray-700/50 rounded-lg shadow md:flex-row w-96 h-full hover:shadow-lg border border-gray-500 backdrop-blur-sm">
        <img
          className="object-fit items-center ms-3 w-24 rounded-lg h-24"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="flex flex-col justify-between p-5 leading-normal">
          <h5 className="mb-2 text-md font-bold tracking-tight text-white">
            {movie.title}
          </h5>
          <div className='flex items-center'>
            <IconStarFilled color='yellow' size={20}/>
            <p className="text-sm font-normal text-white ms-2">
              {movie.vote_average?.toFixed(1)}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
