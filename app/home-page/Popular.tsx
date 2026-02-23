"use client";

import { useEffect, useState } from "react";
import { getPopularMovies } from "../lib/api";
import { Movie } from "../lib/types";
import { MovieCard } from "../ui/MovieCard";


export const PopularMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const popularMovieByResponse = async () => {
      const response = await getPopularMovies();

      setMovies(response.results);
    };
    popularMovieByResponse();
  }, []);
  const imgBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="p-20">
      <div className="titles flex justify-between items-center">
        <h2 className="text-[24px] font-semibold py-8">Popular</h2>
        <a href="/seeMore/popular">See more</a>
      </div>

      <div className=" container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-4">
        {movies &&
          movies.slice(10).map((movie) => (
            <div key={movie.id}>
              <img
                src={`${imgBaseUrl}${movie.poster_path}`}
                alt={movie.title}
              />
              <MovieCard
                key={movie.id}
                title={movie.title}
                desc={movie.overview}
                rating={movie.vote_average}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
