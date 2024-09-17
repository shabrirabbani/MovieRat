import axios from 'axios';
import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../api/axiosInstance';

export default function MovieTrailer({movieId}) {
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await axiosInstance.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`
        );
        const videos = response.data.results;

        const trailerVideo = videos.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );

        if (trailerVideo) {
          setTrailer(trailerVideo.key);
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    fetchTrailer();
  }, [movieId]);

  if (!trailer) return <p>No trailer available.</p>;

    return (
      <div className="trailer-container">
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${trailer}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </div>
    );
}
