"use client";

import { useEffect, useState } from "react";
import { getTopRatedMovies, getUpComingMovies } from "../lib/api";

import { Movie } from "../lib/types";
import { MovieCard } from "../ui/MovieCard";

export const TopRatedMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const response = async () => {
      const data = await getTopRatedMovies();
      setMovies(data.results);
      console.log(data.results);
    };
    response();
  }, []);

  const imgBaseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {movies &&
        movies.map((movie) => (
          <div key={movie.id}>
            <img src={`${imgBaseUrl}${movie.poster_path}`} alt={movie.title} />
            <MovieCard
              key={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              desc={movie.overview}
            />
          </div>
        ))}
    </div>
  );
};

export default TopRatedMovies;
