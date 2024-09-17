import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import { fetchMovieCredits } from "../../../redux/features/creditSlice";

export default function Cast() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {cast, status, error} = useSelector((state) => state.creditMovies);

  useEffect(() => {
    dispatch(fetchMovieCredits(id));
  }, [dispatch, id]);

  if (status === "loading") return <div>Loading cast...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <div className="max-w-screen-xl mx-auto mt-44 sm:-mt-28 ps-5">
      <h2 className="font-bold text-xl">Cast</h2>
      <div className="flex overflow-x-auto space-x-4 py-4">
        {cast.map((member) => (
          <div key={member.cast_id} className="text-center min-w-[150px]">
            <img
              src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
              alt={member.name}
              className="rounded-lg"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = "https://via.placeholder.com/200"
                e.target.style.height = "225px";
                e.target.style.width = "auto";
              }}
            />
            <h3 className="mt-2 text-white">{member.name}</h3>
            <p className="text-gray-400">{member.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
