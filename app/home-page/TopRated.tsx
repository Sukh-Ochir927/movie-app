"use client";

import { useEffect, useState } from "react";
import { getTopRatedMovies } from "../lib/api";

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

  return (
    <div className="p-20">
      <div className="titles flex justify-between items-center">
        <h2 className="text-[24px] font-semibold py-8">Top rated</h2>
        <a href="/seeMore/topRated">see more</a>
      </div>
      <div className="container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {movies &&
          movies.slice(10).map((movie) => (
            <div key={movie.id}>
              <MovieCard
                posterPath={movie.poster_path}
                key={movie.id}
                title={movie.title}
                rating={movie.vote_average}
                desc={movie.overview}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopRatedMovies;
