"use client";

import { useEffect, useState } from "react";
import { Movie } from "../lib/types";
import { getUpComingMovies } from "../lib/api";
import { MovieCard } from "../ui/MovieCard";

export const UpComingMoviesHome = () => {
  const [upComingMovies, setUpComingMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const response = async () => {
      const data = await getUpComingMovies();

      setUpComingMovies(data.results);
    };
    response();
  });

  return (
    <div>
      {upComingMovies &&
        upComingMovies.map((movie) => (
          <div key={movie.id}>
            <MovieCard
              key={movie.id}
              title={movie.title}
              desc={movie.overview}
              rating={movie.vote_average}
            />
          </div>
        ))}
    </div>
  );
};
